import {Fragment, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import image from "../../public/threedots.svg"
import styles from "./header.module.css"
import {CodeIcon, FingerPrintIcon, HomeIcon, LightBulbIcon, MailIcon, MenuIcon, XIcon} from '@heroicons/react/outline'

// const [active , setActive] =useState(false)
// const toggleClass = () => {
//     // @ts-ignore
//     setActive({ active: !active });
// };
const solutions = [
    {
        name: 'Main',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: HomeIcon,
    },
    {
        name: 'About',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#about',
        icon: FingerPrintIcon,
    },
    {
        name: 'Designs',
        description: "Your customers' data will be safe and secure.",
        href: '#designs',
        icon: LightBulbIcon
    },
    {
        name: 'Projects',
        description: "Connect with third-party tools that you're already using.",
        href: '#projects',
        icon: CodeIcon,
    },
    {
        name: 'Contact',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#contact',
        icon: MailIcon,
    },
]

export default function Header() {
    function download() {
        const URL = 'https://storage.jjcloud.ir/records/files/uploads/documents/520ac6b2-e957-4d62-9fdd-ff6776c50731.pdf?requester=3133352e3134382e34302e313037&resource=613a333039313734363720753a32353037323337&from=6a6170616765&X-Amz-Content-Sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=oetSom924MQvtCRu9N6vvQ4bt8cG9HSpRnxWU756SyWy5NVt6nTpmfA9aV2b%2F20220316%2F%2Fs3%2Faws4_request&X-Amz-Date=20220316T152737Z&X-Amz-SignedHeaders=host&X-Amz-Expires=1800&X-Amz-Signature=43da6a14fb18041e3de87c3bac982fc24ae1dbde236b0f43684999bbe669c632'
        if (typeof window !== "undefined") {
            window.location.href = URL
        }
    }

    return (
        <Popover className={styles.mainHeader}>
            <div className={styles.headerSetting}>
                <div
                    className={styles.headerItems}>
                    <div className={styles.itemsFlex}>
                        <a href="#">
                            <span className="sr-only">ThreeDots</span>
                            <img className={styles.logoImage}
                                 src={image}
                                 alt="ThreeDots"
                            />
                        </a>
                    </div>
                    <div className={styles.popoverDisplay}>
                        <Popover.Button
                            className={styles.popoverSetting}>
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className={styles.popoverGroup}>
                        <a href="#" className={`${styles.popoverGroupItems} ${styles.popoverItemsActive}`}>
                            {"Main"}
                        </a>
                        <a onClick={() => window.location.replace("/#about")} className={styles.popoverGroupItems}>
                            {"About"}
                        </a>
                        <a onClick={() => window.location.replace("/#designs")} className={styles.popoverGroupItems}>
                            {"Designs"}
                        </a>
                        <a onClick={() => window.location.replace("/#projects")} className={styles.popoverGroupItems}>
                            {"Projects"}
                        </a>
                        <a onClick={() => window.location.replace("/#contact")} className={styles.popoverGroupItems}>
                            {"Contact"}
                        </a>


                    </Popover.Group>
                    <div className={styles.CVBtnDisplay}>
                        <button onClick={download}
                                className={styles.CVBtnStyle}>
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus
                               className={styles.popoverPanelDisplay}>
                    <div
                        className={styles.popoverPanelSetting}>
                        <div className="pt-5 pb-6 px-5">
                            <div className={styles.popoverPanelFlex}>
                                <div>
                                    <img
                                        className="h-5 w-8"
                                        src={image}
                                        alt="TreeDots"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button
                                        className={styles.popoverCloseBtn}>
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className={styles.navGrid}>
                                    {solutions.map((item) => (
                                        <a onClick={() => window.location.replace(`/${item.href}`)}
                                           key={item.name}
                                           href={item.href}
                                           className={styles.popoverPanelItems}
                                        >
                                            <item.icon className={styles.popoverPanelIcons}
                                                       aria-hidden="true"/>
                                            <span
                                                className={styles.popoverPanelTexts}>{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <button onClick={download}
                                        className={styles.fullCVBtn}>
                                    Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

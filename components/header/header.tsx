import {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import image from "../../assists/img/threedots.svg"
import {
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
const solutions = [
    {
        name: 'Main',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'About',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    {name: 'Designs', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon},
    {
        name: 'Projects',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Contact',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]

export default function Header() {
    return (
        <Popover className="relative bg-dark-header/[.18]  border-b border-light-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">ThreeDots</span>
                            <img className=" relative h-5 w-8 sm:h-5 -top-2"
                                src={image}
                                alt="ThreeDots"
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button
                            className="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                        </Popover.Button>
                    </div>
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">

                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            Main
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            About
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            Designs
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            Projects
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-300">
                            Contact
                        </a>


                    </Popover.Group>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <button
                            className="h-10 px-5 text-sm bg-transparent hover:bg-purple-500/[.5] text-gray-400 bg-purple-500/[.10] font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
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
                               className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div
                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-dark-background divide-y-2 divide-light-border">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-5 w-8"
                                        src={image}
                                        alt="TreeDots"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button
                                        className="bg-dark-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-dark-header focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true"/>
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {solutions.map((item) => (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-dark-header"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-purple-600"
                                                       aria-hidden="true"/>
                                            <span
                                                className="ml-3 text-base font-medium text-gray-400">{item.name}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div>
                                <button
                                    className="w-full flex items-center justify-center h-10 px-5 text-sm bg-transparent hover:bg-purple-500/[.5] text-gray-400 bg-purple-500/[.10] font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
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

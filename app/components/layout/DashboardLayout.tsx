"use client"
import Link from 'next/link'
import React from 'react'
import { sidebarData } from '../../../utils/sidebarData'

type Props = {
    children: React.ReactNode,
}

function DashboardLayout({ children }: Props) {
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-stone-50 p-5">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="px-4">
                            <h2 className='font-grandis text-3xl text-[#343C6A]'>Overview</h2>
                        </div>
                    </nav>
                    {/* Page content here */}
                    <div className="p-4">{children}</div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-stone-50 is-drawer-close:w-14 is-drawer-open:w-64">
                        <div className='p-5 border-b border-stone-200 w-full flex items-center gap-2'>
                            <div className="text-[#343C6A]">
                                {sidebarData.logo.icon}
                            </div>
                            <span className="text-xl font-bold text-[#343C6A] is-drawer-close:hidden">
                                {sidebarData.logo.text}
                            </span>
                        </div>
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow overflow-y-auto">
                            {sidebarData.sections.map((section, index) => (
                                <React.Fragment key={index}>
                                    {<li >
                                            <Link
                                                href={section.href}
                                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right group font-grandis font-medium capitalize text-lg"
                                                data-tip={section.name}
                                            >
                                                {section.icon}
                                                <span className="is-drawer-close:hidden text-[#B1B1B1] group-hover:text-[#343C6A]">
                                                    {section.name}
                                                </span>
                                            </Link>
                                        </li>}
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
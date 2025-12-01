"use client"
import Link from 'next/link'
import React from 'react'
import { sidebarData } from '../../../utils/sidebarData'
import { usePathname } from "next/navigation";
import { IoIosMenu } from 'react-icons/io';


type Props = {
    children: React.ReactNode,
}

function DashboardLayout({ children }: Props) {

    const pathname = usePathname();

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full h-20 bg-stone-50 px-5 border-b border-stone-200">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="text-3xl mr-3">
                            {/* Sidebar toggle icon */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg> */}
                            <IoIosMenu />
                        </label>
                        <div className="flex w-full items-center justify-between">
                            <div>
                                <h2 className='font-grandis text-3xl font-bold text-[#343C6A]'>Overview</h2>
                                <p className='font-grandis text-[15px] font-normal text-[#B1B1B1]'>Welcome to Your AI Agent Dashboard</p>
                            </div>
                            <div className='flex gap-6'>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn bg-[#F5F7FA] m-1 w-12 h-12 p-2 rounded-full border-0 shadow-none">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_1_90)">
                                                <path d="M13.2845 25H11.7155C10.4465 25 9.41401 23.9676 9.41401 22.6986V22.1678C8.87451 21.9954 8.35034 21.7778 7.84678 21.5172L7.47061 21.8934C6.55952 22.8056 5.1001 22.7789 4.21548 21.8931L3.10654 20.7842C2.22036 19.899 2.19487 18.44 3.10684 17.5291L3.48271 17.1532C3.22212 16.6496 3.00459 16.1255 2.83218 15.5859H2.30142C1.03247 15.5859 0 14.5535 0 13.2845V11.7155C0 10.4465 1.03247 9.41406 2.30146 9.41406H2.83223C3.00464 8.87451 3.22217 8.35039 3.48276 7.84683L3.10659 7.4707C2.19517 6.56025 2.22031 5.10117 3.10688 4.21558L4.21592 3.10659C5.10259 2.2187 6.56167 2.19653 7.471 3.10688L7.84683 3.48271C8.35039 3.22217 8.87456 3.00459 9.41406 2.83218V2.30142C9.41406 1.03242 10.4465 0 11.7155 0H13.2845C14.5535 0 15.5859 1.03242 15.5859 2.30142V2.83223C16.1254 3.00459 16.6496 3.22217 17.1532 3.48276L17.5293 3.10659C18.4404 2.19438 19.8999 2.22114 20.7845 3.10693L21.8934 4.21582C22.7796 5.10103 22.8051 6.55996 21.8931 7.47095L21.5172 7.84683C21.7778 8.35039 21.9954 8.87446 22.1678 9.41406H22.6985C23.9675 9.41406 25 10.4465 25 11.7155V13.2845C25 14.5535 23.9675 15.5859 22.6985 15.5859H22.1678C21.9954 16.1255 21.7778 16.6496 21.5172 17.1532L21.8934 17.5293C22.8048 18.4398 22.7797 19.8989 21.8931 20.7845L20.7841 21.8935C19.8974 22.7813 18.4383 22.8035 17.529 21.8932L17.1532 21.5173C16.6496 21.7779 16.1254 21.9955 15.5859 22.1679V22.6987C15.5859 23.9676 14.5535 25 13.2845 25ZM8.09165 19.979C8.79121 20.3927 9.54414 20.7053 10.3295 20.908C10.6529 20.9914 10.8789 21.2831 10.8789 21.6171V22.6986C10.8789 23.1599 11.2542 23.5352 11.7155 23.5352H13.2845C13.7458 23.5352 14.1211 23.1599 14.1211 22.6986V21.6171C14.1211 21.2831 14.3471 20.9914 14.6706 20.908C15.4559 20.7053 16.2088 20.3927 16.9084 19.979C17.1962 19.8088 17.5627 19.8551 17.7992 20.0916L18.5652 20.8576C18.8955 21.1883 19.4258 21.1806 19.748 20.858L20.8577 19.7483C21.1791 19.4273 21.1898 18.8968 20.858 18.5654L20.0917 17.7991C19.8552 17.5626 19.8089 17.1961 19.9791 16.9083C20.3928 16.2088 20.7053 15.4559 20.908 14.6705C20.9915 14.3471 21.2832 14.1211 21.6172 14.1211H22.6986C23.1599 14.1211 23.5352 13.7458 23.5352 13.2846V11.7155C23.5352 11.2542 23.1599 10.879 22.6986 10.879H21.6172C21.2832 10.879 20.9915 10.653 20.908 10.3296C20.7053 9.54419 20.3928 8.79126 19.9791 8.09175C19.8089 7.80395 19.8552 7.43745 20.0917 7.20103L20.8577 6.43496C21.1889 6.1042 21.1802 5.57393 20.858 5.2521L19.7484 4.14248C19.4268 3.82041 18.8963 3.81099 18.5655 4.14219L17.7992 4.90855C17.5628 5.14502 17.1962 5.19131 16.9084 5.02109C16.2089 4.60737 15.456 4.29482 14.6706 4.09214C14.3472 4.00869 14.1212 3.71699 14.1212 3.38296V2.30142C14.1212 1.84014 13.7458 1.46484 13.2846 1.46484H11.7156C11.2543 1.46484 10.879 1.84014 10.879 2.30142V3.38286C10.879 3.71689 10.653 4.00859 10.3295 4.09204C9.54419 4.29473 8.79126 4.60728 8.0917 5.021C7.80381 5.19116 7.43735 5.14487 7.20093 4.90845L6.43491 4.14238C6.10464 3.81172 5.57422 3.81938 5.2521 4.14204L4.14238 5.25171C3.821 5.57271 3.81025 6.10313 4.14209 6.43457L4.90845 7.20093C5.14487 7.43735 5.19116 7.80386 5.021 8.09165C4.60728 8.79116 4.29478 9.54409 4.09209 10.3295C4.00859 10.6529 3.71689 10.8789 3.38291 10.8789H2.30146C1.84019 10.8789 1.46484 11.2542 1.46484 11.7155V13.2845C1.46484 13.7458 1.84019 14.1211 2.30146 14.1211H3.38286C3.71689 14.1211 4.00854 14.3471 4.09204 14.6705C4.29473 15.4559 4.60728 16.2088 5.02095 16.9083C5.19111 17.1961 5.14482 17.5626 4.9084 17.799L4.14233 18.5651C3.81118 18.8959 3.81982 19.4261 4.14204 19.7479L5.25166 20.8576C5.57329 21.1796 6.10376 21.1891 6.43452 20.8579L7.20083 20.0915C7.37505 19.9173 7.7375 19.7695 8.09165 19.979Z" fill="#718EBF" />
                                                <path d="M12.502 17.9395C9.50259 17.9395 7.0625 15.4993 7.0625 12.5C7.0625 9.50068 9.50259 7.06055 12.502 7.06055C15.5013 7.06055 17.9414 9.50068 17.9414 12.5C17.9414 15.4993 15.5013 17.9395 12.502 17.9395ZM12.502 8.52539C10.3103 8.52539 8.52734 10.3084 8.52734 12.5C8.52734 14.6916 10.3104 16.4746 12.502 16.4746C14.6936 16.4746 16.4766 14.6916 16.4766 12.5C16.4766 10.3084 14.6936 8.52539 12.502 8.52539Z" fill="#718EBF" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_90">
                                                    <rect width="25" height="25" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </div>
                                    <ul tabIndex={-1} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn bg-[#F5F7FA] m-1 w-12 h-12 p-2 rounded-full border-0 shadow-none">
                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.4375 25C9.28448 25 7.53125 23.2479 7.53125 21.0938C7.53125 20.6625 7.88125 20.3125 8.3125 20.3125C8.74375 20.3125 9.09375 20.6625 9.09375 21.0938C9.09375 22.3866 10.1458 23.4375 11.4375 23.4375C12.7292 23.4375 13.7812 22.3866 13.7812 21.0938C13.7812 20.6625 14.1312 20.3125 14.5625 20.3125C14.9938 20.3125 15.3438 20.6625 15.3438 21.0938C15.3438 23.2479 13.5907 25 11.4375 25Z" fill="#FE5C73" />
                                            <path d="M20.0338 21.875H2.84629C1.84112 21.875 1.02344 21.0573 1.02344 20.0521C1.02344 19.5187 1.25575 19.0136 1.66087 18.6666C1.687 18.6438 1.71504 18.623 1.74422 18.6041C3.27335 17.2697 4.14844 15.35 4.14844 13.3228V10.4166C4.14844 6.39591 7.4203 3.125 11.44 3.125C11.6067 3.125 11.787 3.12805 11.9537 3.15628C12.3796 3.22704 12.6672 3.63026 12.5963 4.05521C12.5255 4.48017 12.1151 4.7678 11.6973 4.69685C11.614 4.6833 11.5224 4.6875 11.44 4.6875C8.28185 4.6875 5.71094 7.25727 5.71094 10.4166V13.3228C5.71094 15.8396 4.60773 18.2209 2.68703 19.8551C2.67139 19.8677 2.65784 19.8792 2.64106 19.8906C2.61302 19.9261 2.58594 19.9802 2.58594 20.0521C2.58594 20.1937 2.70477 20.3125 2.84629 20.3125H20.0338C20.1755 20.3125 20.2943 20.1937 20.2943 20.0521C20.2943 19.9791 20.2673 19.9261 20.2381 19.8906C20.2224 19.8792 20.2089 19.8677 20.1932 19.8551C18.2714 18.2198 17.1693 15.8396 17.1693 13.3228V12.1876C17.1693 11.7563 17.5193 11.4063 17.9506 11.4063C18.3818 11.4063 18.7318 11.7563 18.7318 12.1876V13.3228C18.7318 15.3511 19.6079 17.2718 21.1391 18.6073C21.1671 18.626 21.1942 18.6459 21.2192 18.6678C21.6245 19.0136 21.8568 19.5187 21.8568 20.0521C21.8568 21.0573 21.0392 21.875 20.0338 21.875Z" fill="#FE5C73" />
                                            <path d="M18.7318 10.4166C15.8599 10.4166 13.5234 8.08029 13.5234 5.2084C13.5234 2.3365 15.8599 0 18.7318 0C21.6037 0 23.94 2.3365 23.94 5.2084C23.94 8.08029 21.6037 10.4166 18.7318 10.4166ZM18.7318 1.5625C16.7213 1.5625 15.0859 3.19786 15.0859 5.2084C15.0859 7.21874 16.7213 8.8541 18.7318 8.8541C20.7422 8.8541 22.3775 7.21874 22.3775 5.2084C22.3775 3.19786 20.7422 1.5625 18.7318 1.5625Z" fill="#FE5C73" />
                                        </svg>


                                    </div>
                                    <ul tabIndex={-1} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="m-1">
                                        <div className="avatar">
                                            <div className="w-12 rounded-full">
                                                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul tabIndex={-1} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                                        <li><a>Item 1</a></li>
                                        <li><a>Item 2</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* Page content here */}
                    <div className="p-10">{children}</div>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible border-r border-stone-200">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-stone-50 is-drawer-close:w-14 is-drawer-open:w-64">
                        <div className='px-5 h-20 border-b border-stone-200 w-full flex items-center gap-2'>
                            <div className="text-[#343C6A]">
                                <img src={sidebarData.logo.img} alt="" />
                            </div>
                        </div>
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow overflow-y-auto relative px-0">
                            {sidebarData.sections.map((section, index) => {
                                const isActive = pathname === section.href;
                                return (
                                    <React.Fragment key={index}>
                                        <li>
                                            <Link
                                                href={section.href}
                                                data-tip={section.name}
                                                className={`
                                                    group
                                                    flex items-center gap-5
                                                    font-grandis font-medium capitalize text-lg
                                                    p-5 relative
                                                    before:absolute before:w-2 before:h-full before:left-0 
                                                    before:rounded-r-lg
                                                    before:transition-all before:duration-200
                                                    text-[#B1B1B1]
                                                    ${isActive
                                                        ? "before:bg-[linear-gradient(90deg,#f55823_0%,#ff9f00_100%)] text-[#343C6A]"
                                                        : "hover:before:bg-[linear-gradient(90deg,#f55823_0%,#ff9f00_100%)]"
                                                    }
                                                `}
                                            >
                                                <span
                                                    className={`
                                                        transition-colors duration-200
                                                        ${isActive ? "text-[#343C6A]" : "group-hover:text-[#343C6A]"}
                                                    `}
                                                >
                                                    {section.icon}
                                                </span>

                                                <span
                                                    className={`
                                                        transition-colors duration-200
                                                        is-drawer-close:hidden
                                                        ${isActive
                                                            ? "bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent"
                                                            : "group-hover:bg-gradient-to-r group-hover:from-[#f55823] group-hover:to-[#ff9f00] group-hover:bg-clip-text group-hover:text-transparent"
                                                        }
                                                    `}
                                                >
                                                    {section.name}
                                                </span>
                                            </Link>
                                        </li>
                                    </React.Fragment>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
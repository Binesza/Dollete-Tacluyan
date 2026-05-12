import { Link, useNavigate } from "react-router-dom"
import { useHeader } from "../contexts/HeaderContext"
import { useSidebar } from "../contexts/SidebarContext"
import { useAuth } from "../contexts/AuthContext"
import { useEffect, useState, type FormEvent } from "react"

const AppHeader = () => {
    const { isOpen, toggleUserMenu } = useHeader()
    const { toggleSidebar } = useSidebar()
    const { user, logout } = useAuth()

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const handleLogout = async (e: FormEvent) => {
        try {
            e.preventDefault()

            setIsLoading(true)

            await logout()
            navigate('/')
        } catch (error) {
            console.error('Unexpected server error occured during logging out: ', error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleUserFullNameFormat = () => {
        if (!user) return ""

        let fullName = `${user.last_name}, ${user.first_name}`

        if (user.middle_name) {
            fullName += ` ${user.middle_name.charAt(0)}.`
        }

        if (user.suffix_name) {
            fullName += ` ${user.suffix_name}`
        }

        return fullName
    };

    useEffect(() => {
        if (user) {
            handleUserFullNameFormat
        }
    }, [])

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-40" onClick={toggleUserMenu} />
            )}

            <nav className="fixed top-0 z-50 w-full bg-cyan-800 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">

                        {/* Sidebar button */}
                        <button
                            type="button"
                            onClick={toggleSidebar}
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100"
                        >
                            <svg
                                className="w-6 h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth={2}
                                    d="M5 7h14M5 12h14M5 17h10"
                                />
                            </svg>
                        </button>

                        {/* Logo */}
                        <a href="#" className="flex ms-2 md:me-24">
                            <span className="text-white text-lg font-semibold">
                                Flowbite
                            </span>
                        </a>

                        {/* User menu */}
                        <div className="flex items-center ms-3">

                            <button
                                type="button"
                                onClick={toggleUserMenu}
                                className="flex text-sm bg-gray-800 rounded-full"
                            >
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                    alt="user"
                                />
                            </button>

                            <div
                                className={`absolute right-8 top-9 min-w-50 z-50 ${isOpen ? "block" : "hidden"
                                    } bg-cyan-800 rounded-sm shadow`}
                            >
                                <div className="px-4 py-3 border-b">
                                    <p className="text-medium text-white">
                                        {/* ✅ FIXED: CALL FUNCTION */}
                                        {handleUserFullNameFormat()}
                                    </p>
                                </div>

                                <ul className="p-2 text-sm font-sm text-black">
                                    <li>
                                        <button
                                            type="button"
                                            className="block w-full text-left px-4 py-2 text-sm text-white rounded-md
               hover:bg-cyan-700 hover:text-white transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
                                            role="menuitem"
                                            onClick={handleLogout}
                                            disabled={isLoading}
                                        >
                                            {isLoading ? "Signing Out..." : "Sign Out"}
                                        </button>


                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AppHeader
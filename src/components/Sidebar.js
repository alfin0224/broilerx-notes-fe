import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import Image from '@material-tailwind/react/Image';
import BroilerLogo from '../assets/img/broiler-logo.png';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <div data-testid="sidebar">
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="https://broilerx.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <Image src={BroilerLogo} />
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-gray-500 to-gray-700 text-white shadow-md"
                                >
                                    <Icon name="toc" size="2xl" />
                                    Catatan
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/user"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-gray-500 to-gray-700 text-white shadow-md"
                                >
                                    <Icon name="people" size="2xl" />
                                    User
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

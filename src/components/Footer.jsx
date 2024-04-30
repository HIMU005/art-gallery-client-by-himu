import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className=" divide-y bg-sky-100 mt-16 px-[5%]">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">

                        <span className="self-center text-3xl font-bold text-black"><span className="text-my-green">Himu</span> Art gallery</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3 text-black ">
                        <h3 className="tracking-wide uppercase text-black font-medium ">Product</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer " href="#">Features</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Integrations</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Pricing</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 text-black ">
                        <h3 className="tracking-wide uppercase dark:text-gray-900 text-black font-medium ">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Privacy</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Terms of Service</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 text-black  ">
                        <h3 className="uppercase dark:text-gray-900 text-black font-medium ">Developers</h3>
                        <ul className="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">Public API</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Documentation</a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#">Guides</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3 text-black ">
                        <div className="uppercase dark:text-gray-900 text-black font-medium ">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/himu.hashanuzzaman" title="Facebook" className="flex items-center p-1">
                                <FaFacebook className="text-2xl text-primary" />
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/HIMU005" title="Github" className="flex items-center p-1">
                                <FaGithub className="text-2xl" />
                            </a>
                            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/himuhashanuzzaman/" title="Instagram" className="flex items-center p-1">
                                <FaInstagram className="text-2xl text-secondary" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-600"><span className="text-lg font-semibold">© </span><span className="text-my-green">Himu</span>-art-gallery Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;
import "./style.css";

export default function Home() {
    return (
        <>
            <div className="w-full h-screen bg-customize text-center px-3 md:px-14">
                <div className="text-white py-36">
                    <h1 className="w-full text-4xl md:text-5xl leading-none font-extrabold tracking-tight">
                        Jelajahi pengetahuan baru tentang <span id="typed"></span>
                    </h1>
                    <p className=" sm:text-2xl sm:leading-10 font-medium mt-3 md:mt-6">
                        Dirancang untuk pemula yang baru belajar coding dari dasar. Bergabunglah bersama komunitas kami dengan bantuan mentor kami yang berpengalaman.
                    </p>
                </div>
            </div>
        </>
    );
}

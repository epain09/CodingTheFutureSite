// TODO

export default function Footer() {
    return (
        <footer className = "relative bottom-0 left-0 right-0">
            <div className = "bg-light-orange-1 py-4 flex flex-col md:flex-row md:justify-between">
                <div className = "flex flex-col *:w-full text-left">
                    <h1 className = 'pl-3'>Contact us:</h1>
                    <div className = "flex *:px-4">
                        <img src = "../../src/assets/icons/site/ui/emailimgblack.png" alt = "email icon"/>
                        <p>Email: codingthefuture101@gmail.com</p>
                    </div>
                </div>
                <div className = "flex items-center *:mx-2">
                    <p>
                        &copy; Coding the Future 2026
                    </p>
                    <img src = "../../../src/assets/icons/site/logo/logo-no-bg-white.png" className = "h-12" alt = "email icon"/>
                </div>
            </div>
        </footer>
    );
}
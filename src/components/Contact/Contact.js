export default function Contact() {
    return (
        <section id="contact"
                 className="my-10 align-center max-w-5xl mx-auto p-3">
            <h2 className="text-5xl font-bold text-emerald-500 text-center">
                Contact
            </h2>
            <div className="flex gap-5 justify-center 
                        my-10">
                <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://www.linkedin.com/in/mohammed-hammad-zaid-b29190259/">
                    Linkdin: 
                    <span className="font-bold">
                        www.linkedin.com/in/mohammed-hammad-zaid-b29190259
                    </span>
                </a>
                <span>
                    Gmail: hammadzaid08@gmail.coim
                </span>
                <span>
                    Contact Number: 8535051925
                </span>
                {/* <a rel="noreferrer"
                   target="_blank"
                   className="text-center hover:underline"
                   href=
"https://twitter.com/geeksforgeeks">
                    Twitter:
                    <span className="font-bold">
                        @geeksforgeeks
                    </span>
                </a> */}
            </div>
        </section>
    );
}
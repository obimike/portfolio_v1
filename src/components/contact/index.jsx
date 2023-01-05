import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [isLoading, setisLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setisLoading(true);

    // emailjs
    //   .sendForm(
    //     "service_f6rq6up", // "YOUR_SERVICE_ID",
    //     "template_9n60b35", // "YOUR_TEMPLATE_ID",
    //     form.current,
    //     "2c8sF122lijze5EvX" //  "YOUR_PUBLIC_KEY"
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //  form.current.from_name.value = "";
    //  form.current.from_email.value = "";
    //  form.current.subject.value = "";
    //  form.current.message.value = "";
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div
      id="connect"
      className="h-screen smallPhone:h-auto items-center smallPhone:mx-4 tablet:px-16 py-24"
    >
      <div className="text-center mb-16">
        <p className="section_name bg-contact tablet:bg-contact_big ">
          Let's Connect
        </p>
      </div>

      <div className="mt-12 tablet:flex tablet:justify-between">
        <div className=" tablet:w-5/12 tablet:align-middle">
          <h1 className="smallPhone:text-center smallPhone:text-lg tablet:text-2xl tablet:text-left mb-2 ">
            Get in touch
          </h1>
          <p className="smallPhone:text-center smallPhone:text-sm tablet:text-lg tablet:text-left">
            Am looking out for opportunity to collaborate with Individuals or
            cooperate organisations to bring ideas to reality.
            <br />
            <br />
            For further requests, questions or just to say “Hi”, Please don't by
            shy to use the contact form.
          </p>
        </div>

        <div className="tablet:w-6/12">
          <form ref={form} onSubmit={sendEmail}>
            <div className="tablet:flex">
              <div className="tablet:mr-2">
                <input
                  className="inputContact smallPhone:mt-4 tablet:mt-0 smallPhone:min-w-full tablet:w-full"
                  type="text"
                  placeholder="Name"
                  name="from_name"
                />
              </div>
              <div className="tablet:ml-2">
                <input
                  className="inputContact smallPhone:mt-4 tablet:mt-0 smallPhone:min-w-full 
                  tablet:w-full"
                  type="email"
                  placeholder="Email"
                  name="from_email"
                />
              </div>
            </div>
            <div className="my-4">
              <input
                className="inputContact min-w-full"
                type="text"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div>
              <textarea
                className="inputContact min-w-full h-[227px]"
                placeholder="Message"
                name="message"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <input
                className={
                  "bg-brand-stroke rounded-lg px-3 py-2 hover:bg-transparent border-2 border-brand-stroke border-solid cursor-pointer {isLoading ? 'btn loading': ''} "
                }
                type="submit"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

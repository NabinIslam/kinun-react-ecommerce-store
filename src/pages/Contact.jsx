import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import contactImg from '../assets/contact-img.jpg';
import { useForm } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('meqwjpdq');

  if (state.succeeded) {
    return (
      <div className="py-20">
        <h1 className="text-center font-bold text-4xl mb-10">Contact Us</h1>
        <div className="container mx-auto flex flex-col md:flex-row  justify-between md:items-center">
          <div className="basis-full lg:basis-1/2 px-4">
            <img className="mx-auto" src={contactImg} alt="" />
          </div>
          <div className="basis-full lg:basis-1/2 px-4">
            <div className="max-w-md mx-auto">
              <div className="py-14" id="contact">
                <div className="container mx-auto px-4 md:p-0">
                  <h2 className="text-center text-2xl font-semibold">
                    Thanks for contacting
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <h1 className="text-center font-bold text-4xl mb-10">Contact Us</h1>
      <div className="container mx-auto flex flex-col md:flex-row  justify-between md:items-center">
        <div className="basis-full lg:basis-1/2 px-4">
          <img className="mx-auto" src={contactImg} alt="" />
        </div>
        <div className="basis-full lg:basis-1/2 px-4">
          <div className="max-w-md mx-auto">
            <form
              className="flex flex-col w-full gap-4"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="name" value="Your name" />
                </div>
                <TextInput
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Full name"
                  required={true}
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email" value="Your email" />
                </div>
                <TextInput
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  required={true}
                />
              </div>

              <div id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="comment" value="Your message" />
                </div>
                <Textarea
                  name="comment"
                  type="text"
                  id="comment"
                  placeholder="Leave a comment..."
                  required={true}
                  rows={4}
                />
              </div>

              <Button gradientDuoTone="purpleToBlue" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

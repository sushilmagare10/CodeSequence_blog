"use client"

import { sendEmail } from '@/components/Email/SendEmail';
import { Button } from '@/components/ui/button';
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";


const Contact = () => {
    return (
        <div className='w-full h-[60vh] flex flex-col mt-16 justify-center items-center '>
            <p className='text-gray-700 -mt-6 dark:text-white/30'>Please contact me directly at <a className='underline cursor-pointer' href='mailto:sushilmagare10@gmail.com'>sushilmagare10@gmail.com</a> or
                {" "}
                through this form
            </p>
            <form className='mt-10 flex flex-col gap-3 w-full md:w-[60%]'
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully!", {
                        position: 'top-right'
                    });
                }}
            >
                <input
                    name='senderEmail'
                    type='email'
                    placeholder='Your Email'
                    required
                    maxLength={500}
                    className='h-14 rounded-lg border border-black/10 p-4 bg-card' />
                <textarea
                    name='message'
                    placeholder='Your Message...'
                    required
                    maxLength={5000}
                    className='h-52 rounded-lg border border-black/10 p-4 bg-card' />
                <Button variant='outline' type='submit'
                    className="group flex items-center justify-center gap-2 mt-3 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 "
                >
                    Send Email
                    <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                </Button>
            </form>
        </div>
    )
}

export default Contact
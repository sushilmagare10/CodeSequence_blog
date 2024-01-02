"use server"

import React from 'react'

import { getErrorMessage, validateString } from "@/lib/utils"
import { Resend } from "resend"
import ContactFormEmail from './ContactFormEmail'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {

    const senderEmail = formData.get("senderEmail")
    const message = formData.get("message")

    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: "Invalid sender email",
        };
    }
    if (!validateString(message, 5000)) {
        return {
            error: "Invalid message",
        };
    }

    let data
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "sushilmagare10@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
                message: message,
                senderEmail: senderEmail
            })
        })
    } catch (error) {
        return {
            error: getErrorMessage(error)
        }
    }

    return { data }
}
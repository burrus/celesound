<template>
    <div class="contact">
        <Header />
        <div class="content">
            <div class="desktop">
                <Menu />
            </div>
            <form id="contact" @submit.prevent="sendEmail">
                <div class="fields">
                    <h3>What are you working on?</h3>
                    <input
                        @input="validateForm"
                        type="text"
                        v-model="name"
                        name="name"
                        placeholder="Name"
                    />
                    <input
                        @input="validateForm"
                        type="email"
                        v-model="email"
                        name="email"
                        placeholder="Email address"
                    />
                    <textarea
                        @input="validateForm"
                        v-model="message"
                        name="message"
                        rows="7"
                        placeholder="Message"
                    ></textarea>
                    <input type="submit" value="Send" :disabled="!isValidForm" />
                </div>
            </form>
        </div>
        <Footer />
    </div>
</template>

<script>
import emailjs from "emailjs-com"
import Footer from "@/components/Footer.vue"
import Header from "@/components/Header.vue"
import Menu from "@/components/Menu.vue"

const serviceId = "service_rxbovf7"
const templateId = "contact_form"
const userId = "user_FEcV7BFrGCIsYPA0PbtV6"

export default {
    name: "Contact",
    components: {
        Footer,
        Header,
        Menu,
    },
    data() {
        return {
            name: null,
            email: null,
            message: null,
            isValidForm: false,
        }
    },
    methods: {
        sendEmail(e) {
            try {
                emailjs.sendForm(serviceId, templateId, e.target, userId, {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                })

                this.name = null
                this.email = null
                this.message = null

                alert("Your message has been sent!")
            } catch (error) {
                alert(error)
            }
        },
        validateForm() {
            if (!this.name || !this.message) return

            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (regex.test(this.email)) {
                this.isValidForm = true
            }
        },
    },
}
</script>

<style scoped>
.contact,
.fields {
    display: flex;
}

.contact {
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
}

.fields {
    flex-direction: column;
    margin: 0 auto;
    width: 90vw;
}

form {
    margin: 0 auto;
}

h3 {
    color: black;
}

input,
input::placeholder,
textarea,
textarea::placeholder {
    font-family: "Roboto Mono", sans-serif;
}

textarea {
    resize: vertical;
}
</style>
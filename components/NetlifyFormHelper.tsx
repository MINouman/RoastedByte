
export default function NetlifyFormHelper() {
    return (
        <form
            name="contact"
            data-netlify="true"
            hidden
            style={{ display: "none" }}
        >
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" />
            <input type="email" name="email" />
            <input type="text" name="subject" />
            <textarea name="message"></textarea>
        </form>
    );
}

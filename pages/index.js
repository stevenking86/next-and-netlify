import Link from 'next/link'

const IndexPage = () => (
  <div>
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      action="/success">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

    Click{' '}
        <Link href="/success">
          <a>here</a>
        </Link>{' '}
        to read more
  </div>
)

export default IndexPage

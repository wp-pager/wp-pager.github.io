export default (): void => {
    window.addEventListener('hashchange', e => {
        e.preventDefault()

        const hash = window.location.hash

        if (!hash) {
            return
        }

        const el = document.querySelector(hash)

        if (!el) {
            return
        }

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    })
}
export default () => {
    const qaItems = [
        {
            question: 'What is a tab in album?',
            answer: 'Tab is what you see above the album. One tab represents one image. By default, each tab is numbered starting from 1. If you give an image a title, it will be used instead of the number. If you have tabs with the same title one after another, they will be grouped into one tab.',
        },
        {
            question: 'Why giving an image a title?',
            answer: 'Title is used as a name for the image in album. For example, if you have an image with your cat and you give it a title "My cat", you can easily find it in the album by clicking on "My cat" tab. If you add a second image and name it "My cat", it will be grouped into the same tab.',
        },
        {
            question: 'How to add an image to album?',
            answer: `After installing and enabling the plugin in WordPress admin panel, you will be able to navigate to the WP Pager plugin page. There you will see 4 tabs. The "Uploader" tab will be responsible for uploading images to the album. See the screenshot in <a href="#manage-files-easily">"Manage files easily"</a> section.`,
        },
    ]

    return {
        qaItems,
    }
}
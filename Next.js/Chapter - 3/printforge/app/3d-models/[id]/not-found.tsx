import NotFoundUI from "@/components/NotFoundUI"

export default function NotFound({title, subTitle, linkText, linkHref}: {
    title: string
    subTitle: string
    linkText: string
    linkHref: string
}) {
    return <NotFoundUI
        title="Model Not Found"
        subTitle="Sorry, we couldn't find the model requested"
        linkText="Go Back to All Model"
        linkHref="/3d-models"
    />
}
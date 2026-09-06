import NotFoundUI from "@/components/NotFoundUI";

export default function NotFound() {
    return(
        <NotFoundUI 
            title="Categories Not Found"
            subTitle="Sorry, we couldn't find the requested category"
            linkText="See All Models"
            linkHref="/3d-models"
        />
    )
}
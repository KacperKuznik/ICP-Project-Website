import SectionLayout from "./SectionLayout";

export default function About() {
    let description = "our group description"
    return (
        <SectionLayout header="About" description={description} />
    )
}
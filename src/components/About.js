import SectionLayout from "./SectionLayout";

export default function About() {
    let description = "A passionate team of individuals dedicated to improving everyday life of other people. We want to create a workout app that will help you track your progress and become better."
    return (
        <SectionLayout header="About" description={description} />
    )
}
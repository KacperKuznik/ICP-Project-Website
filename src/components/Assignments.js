import Card from "./Card";
import SectionLayout from "./SectionLayout";

export default function Assignments() {
    return <SectionLayout header={"Assignments"} description={""}>
            <div className="flex flex-row space-x-4">
            <Card imageSrc={"/images/assignment1.png"} description={"Assignment #1"} popup={true} />
                <Card imageSrc={"/images/assignment2.jpg"} description={"Assignment #2"} popup={true}/>           
            </div>
        </SectionLayout>
}
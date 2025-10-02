"use client";
import Card from "./Card";
import SectionLayout from "./SectionLayout";
import { useRouter } from "next/navigation";

export default function Project() {
      const router = useRouter();

    const handleClick = (name) => {
        router.push("/pdf/" + name);
    };

    let description = "Keeping track of one’s workout and progress has a huge influence on one’s gains. Today’s apps focus mostly on pre-made workouts with a predefined number of reps, without keeping a record of each set. Usually, people must do it themselves, either in memory or on paper. That creates a lot of additional distraction during a workout which might scare people away. An app that would track progress through each set and rep, and make it visible during a workout, can greatly improve a workout experience and help progress faster."
    return <SectionLayout header={"Workout App Project"} description={description}>
            <div className="flex flex-wrap gap-4">
                <Card imageSrc={"/images/assignment1.png"} description={"#1"} onClick={() => handleClick("./Project_Stage_1")}>popup content</Card>
                <Card imageSrc={"/images/assignment1.png"} description={"#2"}/>
                <Card imageSrc={"/images/assignment1.png"} description={"#3"}/>
                <Card imageSrc={"/images/assignment1.png"} description={"#4"}/>
            <Card imageSrc={"/images/assignment1.png"} description={"#5"} />
            </div>
        </SectionLayout>
}
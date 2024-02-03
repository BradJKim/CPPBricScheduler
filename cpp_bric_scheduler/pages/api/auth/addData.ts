import { db  } from "../../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains"

const apiKey = process.env.OPEN_API_KEY;

const template = 
    "Your goal is to create a weekly workout schedule to a college student in their early-20's that attends Cal Poly Pomona College. They are looking to work out at their school gym which is called the Bric. " +

    "The following text include more information about the student: " +
        "They identify as {gender}. " +
        "On a scale of 1 through 5, they chose a {commitment} for commitment in working out. " +
        "They have {experience} years of experience " +
        "They want to work out for {availablity} days " +
        "Their primary focus is {primacyFocus} " +
        "They want to focus on their {bodyFocus} " +
        "On Monday, they are free from {mondayTimeStart} to {mondayTimeEnd}. " +
        "On Monday, they are free from {tuesdayTimeStart} to {tuesdayTimeEnd}. " +
        "On Tuesday, they are free from {mondayTimeStart} to {mondayTimeEnd}. " +
        "On Wednesday, they are free from {wednesdayTimeStart} to {wednesdayTimeEnd}. " +
        "On Thursday, they are free from {thursdayTimeStart} to {thursdayTimeEnd}. " +
        "On Friday, they are free from {fridayTimeStart} to {fridayTimeEnd}. " +
        "On Saturday, they are free from {saturdayTimeStart} to {saturdayTimeEnd}. " +
        "On Sunday, they are free from {sundayTimeStart} to {sundayTimeEnd}. " +

    "The output should only include the following instructions in the described format. Write a quick 2 to 3 sentence summary regarding their workout schedule and how it reflects their specific needs. " +
    "Create a schedule following this format: " + 
    "Monday: (Workout Times) - (list of exercises) (new line)" +
    "Tuesday: (Workout Times) - (list of exercises) (new line)" +
    "Wednesday: (Workout Times) - (list of exercises) (new line)" +
    "Thursday: (Workout Times) - (list of exercises) (new line)" +
    "Friday: (Workout Times) - (list of exercises) (new line)" +
    "Saturday: (Workout Times) - (list of exercises) (new line)" +
    "Sunday: (Workout Times) - (list of exercises) (new line)" 
 
const promptTemplate = new PromptTemplate({
    template: template,
    inputVariables: ['gender', 'commitment', 'experience', 'availablity', 'primaryFocus', 'bodyFocus', 'mondayTimeStart', 'mondayTimeEnd', 'tuesdayTimeStart', 'tuesdayTimeEnd','wednesdayTimeStart', 'wednesdayTimeEnd', 'thursdayTimeStart', 'thursdayTimeEnd', 'fridayTimeStart', 'fridayTimeEnd','saturdayTimeStart', 'saturdayTimeEnd', 'sundayTimeStart', 'sundayTimeEnd']
});

const model = new OpenAI({
    openAIApiKey: apiKey,
    temperature: 0.5,
})
const chain = new LLMChain({
    llm: model,
    prompt: promptTemplate,
});

export default async function addSchedule(data: any) {
    let result = null;
    let error = null;

    try {
        const response = await chain.call({
            gender : data.gender,
            commitment: data.commitment,
            experience: data.experience,
            availablity: data.availablity,
            primaryFocus: data.primacyFocus,
            bodyFocus: data.bodyFocus,
            mondayTimeStart: data.mondayTimeStart,
            mondayTimeEnd: data.mondayTimeEnd,
            tuesdayTimeStart: data.tuesdayTimeStart,
            tuesdayTimeEnd: data.tuesdayTimeEnd,
            wednesdayTimeStart: data.wednesdayTimeStart,
            wednesdayTimeEnd: data.wednesdayTimeEnd,
            thursdayTimeStart: data.thursdayTimeStart,
            thursdayTimeEnd: data.thursdayTimeEnd,
            fridayTimeStart: data.fridayTimeStart,
            fridayTimeEnd: data.fridayTimeEnd,
            saturdayTimeStart: data.saturdayTimeStart,
            saturdayTimeEnd: data.saturdayTimeEnd,
            sundayTimeStart: data.sundayTimeStart,
            sundayTimeEnd: data.sundayTimeEnd
        });

        result = await addDoc(collection(db, "schedules"), {
            schedule: response,
            userIdentifier: data.userId
        });
    } catch (e) {
        error = e;
    }

    return { result, error };
}
// import문을 추가하여 .env 모듈을 사용하여 env파일의 값을 읽어온다.
import "dotenv/config"
// OpenAI import
import OpenAI from "openai"

//OpenAI API 키 값으로 등록된 것을 상수에 할당한다.
const { OPENAI_API_KEY } = process.env

//openai 키 출력확인
//console.log(OPENAI_API_KEY) //정상출력 확인.

//Openai 객체 생성
const openai = new OpenAI({
    apiKey : OPENAI_API_KEY
})

// chat.completions.create 함수를 호출하여 텍스트를 생성요청 할 수 있다.
// 결과가 await로 응답이 도착되었을때 출력되게 한다.
// 메세지 목록은 배열로 전달
const completions = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {role: "system", content: "You are a helpful assistant."},
        {
            role: "user",
            content: "Please tell me the three most important things to keep in mind when talking to chatGPT."
        }
    ]
})

//completions 객체에서 필요한 결과만 꺼내오기 위해 choices 객체를 사용한다.
console.log(completions.choices[0].message)

//결과 : role이 Assistant, 즉 LLM이 생성한 결과라는 것. 그리고 인덱스 [0]에 해당하는 메시지 값이 출력된다.
//근데 지금 나는 무료 티어라서... 안됨! RateLimitError : 요금제(quota)를 초과해서 발생하는 오류

// C:\vscode\LANGCHAIN-TS>tsx OpenAIChat.ts
// {
// {
// {
//   role: 'assistant',
//   content: 'When interacting with ChatGPT, here are three important things to keep in mind:\n' +
//     '\n' +
//     '1. **Clarity and Specificity**: To get the most useful responses, try to be as clear and specific as possible in your questions or prompts. Providing context and details helps the model understand your needs better and give more relevant answers.\n' +
//     '\n' +
//     "2. **Limitations**: Remember that ChatGPT is a language model and has limitations. It may not have up-to-date information beyond its last training cut-off in October 2023, and it may not always understand nuanced real-world contexts or provide accurate answers to all questions. Additionally, it doesn't possess the ability to verify facts in real-time.\n" +
//     '\n' +
//     "3. **Security and Privacy**: Avoid sharing personal, sensitive, or confidential information during your interactions. While conversations with AI models are generally handled with privacy considerations in mind, it's good practice to exercise caution.\n" +
//     '\n' +
//     'Being mindful of these aspects can enhance the quality of your interactions with ChatGPT.',
//   refusal: null,
//   annotations: []
// }
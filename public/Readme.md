Machine coding round --> time : 1-2hrs
//we have to plan how we make that app and how to execute it .

Requirement classification discussion :
--> features
--> Tech Stack
like redux , taliwind css and plz justify that why you use that tech stack.
we can also that we will also route with react-router-dom
or we choose a bundler called like vite, parcel , create-reat-app
or a testing library like jest, react-testing-libarary, etc

then you have dedicate 5 mins to planning how the design of app ;
let's say building youtube design;
header component
sidebar component
body component
button component
video container component
video card component

in watch page : head component doesn't change and in the watch page i need either watch page or video container for this we need an outlet component.

we don't use useParam instead we use useSearch paramas because we have now a id of tht video which is clicked and we this is the same id we want if we go to our watch page.
so now we have a id in our url query parameter which is after "?" in the url , now we want to search that query which is the id of the video (because searching it gives the watch page ) so that we go to watch page.

so after this we use searchParams.get() --> to get the query(which is id of that video) and then go to watch page.

so we have "v" after ?(query param) so it searches for v and gives the v query which is our video id.and then we can peroform operatios on that.

higher order components - function which takes a component and returns a component . it is generraly used when we need some little modifications in our component like youtube video cards have some advertistement cards which are inside our video container.

so it takes video card component and return some extra modification to that component.

const AdVideoCard = (videoCard) => {
return(

<div>
<VideoCard />
</div>
)
}

//when it says cannot destructure something from the api as it is undefined it means your state variable is empty . we have to use something videos && and pass info as a prop.
in this we say state variable is empty for the first time .so we say when videos contains something then destrcture info in it.

search bar with api call in every key pressed.

debouncing is what when you don't make an api call on every key pressed you just make an api call when you stop typing.

typing slow = 200ms(time difference between each key strokes); --> typing slow lead to more api calls which leads to slower performance and each key stroke there is an api call.

typing fast = 30ms(time difference between each key strokes) --> typing fast lead to less api calls as the consumer maybe knows the name for which he is searching for.that's why companies made the api call after the after completion of the typing . because it leads to mless api calls which leads to better performance.

but they have to do both type of calls because of the user experience.

performance :

- iphone pro max = 14 letter (14 api calls \* 1000 (people)) = 14000 api calls
- iphone pro max = 14 letter (4 api calls \* 1000 people) = 4000 Api calls

debouncing with 200ms -> if difference between two key storkes in less than 200ms what should i do i wil decline api call because it is useless to make api call in every key strokes.

//when we go forward we make an api call for each key press but when we delete each character it further makes an api call.
so we want when we clear characters from the search query we dont want to make api calls.
so we want our previous searches to go in cache and after then when the user clear characters in search bar we show him the previous searches using caching not making an api call when we delete each character . it helps in performance optimization.

//we can do this by using redux js because we have to track what to show to the user when he deletes each character so we want to display previus searches to it. that's why we use redux to pass that state to the searchinput.

we wil creating searchinputslice and the initialState would be an epmty object
if search query doesn't contain the searchCache mean stored searches then make an api call and update the searchCache with that api call.
for update that i will dispatch the action (cacheResults)

//live chat in youtube

challenges -> 1. get Data live
2.update the ui

eg - a new comment div is appended every single time a new comment is made.so div is constantly pusing thediv butit not freezed our page bcoz of too many divs kep pushing which slows ou page.

two ways to handle live data -> 1. websockets -> ite create a handshake betwen teh ui an the server it is a bidirectional sending and updating o data at no interval.
ui can esnd data server can send data that's wy it's

2. Api polling -> it aso creates a handsake bthe ui an the sever but passign ata in a unidierctional at regular intervals. only server to ui data transfer tht's why it is unidirectional. eg-> ui will take data from the server at a regular intervals let's say ater every 2 seconds the ui takes the data from the server.

i want toupdate my chatlet's build our redux store .

for sendnig your own mesage toth\ live chat -> first makea state varialbe and second make an input box and a button pass the value and onchange attributes to the input box by giving them the state varables and then make this input and buton a form and prevetn default of form by onsubmit event and on submit dispatch({
name : "your name",
message : liveMessage(state variable)
})

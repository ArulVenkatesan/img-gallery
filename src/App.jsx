import Gallery from "./components/gallery"
import one from "./image/dog1.png"
import two from "./image/dog2.png"
import three from "./image/dog3.png"
import four from "./image/dog4.png"
function App() {
    var arr = [
        {
            titlle: "forever loyal",
            img: one
        },
        {
            titlle: "tiny but mighty",
            img: two
        },
        {
            titlle: "happy paws",
            img: three
        },
        {
            titlle: "goodest boy",
            img: four
        },
        {
            titlle: "happy paws",
            img: three
        },
        {
            titlle: "goodest boy",
            img: four
        },
        {
            titlle: "forever loyal",
            img: one
        },
        {
            titlle: "tiny but mighty",
            img: two
        }
    ]
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  justify-center p-10 text-center bg-gray-200" style={{margin:"auto"}}>
            {
            arr.map(function (item) {
                return (<Gallery title={item.titlle} img={item.img} />)
            })
        }
        </div>
         </>
    )
}

export default App
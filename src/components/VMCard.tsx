export default function VMCard(props: { img: string, name: string, status: string }) {
    return (
        <div className="space-y-4 my-2 flex flex-col mx-auto w-2/3">
            <img src={props.img} alt="" className="bg-cover shadow-2xl shadow-gray-600 border-2 border-gray-500 rounded-lg h-40" />

            <ul className="text-white space-y-2">
                <li>Name: {props.name}</li>
                <li>Status: {props.status}</li>
            </ul>

            <button className="text-white border-2 border-gray-500 rounded-lg p-2 hover:border-gray-100 transition-all duration-500">Connect</button>
        </div>
    )
}
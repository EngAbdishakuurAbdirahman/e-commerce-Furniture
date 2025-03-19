function Boxes() {
    return <>
     <div className="pt-20 flex gap-20">
        <div className="bg-green-500 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white">Teachers</h1>
        </div>
        <div className="bg-blue-900 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white">Admin</h1>
        </div>
        <div className="bg-red-500 w-60 h-40 rounded-lg">
            <h1 className="text-5xl pt-5 text-center text-white">0</h1>
            <h1 className="text-5xl pt-5 text-center text-white">Products</h1>
        </div>
    </div>
    </>
}

export default Boxes
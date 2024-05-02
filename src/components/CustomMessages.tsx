import { FaSpinner } from "react-icons/fa"
import { MdError } from "react-icons/md"


export const ErrorMsg = () => {
    return (
        <>
        <label className="text-2xl">Unexpected behavior </label>
        <MdError className="h-7 w-7 animate-pulse text-red-700 flex self-end" />
        </>
    )
}

export const Loading = () => {
    return (
        <>
        <label className="text-2xl">Loading</label>
        <FaSpinner className="h-7 w-7 animate-spin flex self-end" />
        </>
    )
}
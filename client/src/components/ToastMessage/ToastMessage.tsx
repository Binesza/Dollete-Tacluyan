import { useEffect, type FC } from "react"

interface ToastMessageProps {
    message: string
    type: "success" | "error"
    isVisible: boolean
    onClose: () => void
}

const ToastMessage: FC<ToastMessageProps> = ({
    message,
    type,
    isVisible,
    onClose,
}) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose()
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [isVisible, onClose])

    const isSuccess = type === "success"

    return (
        <div
            className={`fixed top-20 right-4 z-[9999] flex items-center w-full max-w-xs p-4 rounded-lg shadow-lg transition-all duration-300
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}
                ${isSuccess ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
            `}
            role="alert"
        >
            <div
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg
                    ${isSuccess ? "bg-green-200 text-green-600" : "bg-red-200 text-red-600"}
                `}
            >
                {isSuccess ? (
                    // CHECK ICON
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.5 9.5 0 0 0 10 .5Zm3.7 8.2-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 1 1 1.4-1.4l1.3 1.3 3.3-3.3a1 1 0 1 1 1.4 1.4Z" />
                    </svg>
                ) : (
                    // X ICON
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.5 9.5 0 0 0 10 .5Zm3.7 11.8a1 1 0 1 1-1.4 1.4L10 11.4l-2.3 2.3a1 1 0 0 1-1.4-1.4L8.6 10 6.3 7.7a1 1 0 0 1 1.4-1.4L10 8.6l2.3-2.3a1 1 0 0 1 1.4 1.4L11.4 10l2.3 2.3Z" />
                    </svg>
                )}
            </div>

            <div className="ml-3 text-sm font-normal">
                {message}
            </div>
        </div>
    )
}

export default ToastMessage
import { Button } from "./ui/button"
import {motion} from "framer-motion"

export default function CustomButton({isActive,children}:{isActive:boolean,children:string}){
    return(
        <Button asChild variant={isActive ? "default" : "outline"}>
                                <motion.button
                                    className=" cursor-pointer transition "
                                    whileHover={{ background: "var(--primary)" }}
                                >
                                    {children}
                                </motion.button>
                            </Button>
    )
}
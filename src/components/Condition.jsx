import Code from "./Code";
import Greetings from "./Greetings";

export default function Condition() {
    const display = false;
    if (display) {
        return (
            <div>
                <Code />
            </div>
        )
    } else {
        return (
            <div>
                <Greetings />
            </div>
        )
    }
}
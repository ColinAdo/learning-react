import Code from "./Code";
import Greetings from "./Greetings";

export default function Condition() {
    const display = true;
    return display ? <Code /> : <Greetings />;
}
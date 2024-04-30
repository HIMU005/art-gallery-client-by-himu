import { Typewriter } from "react-simple-typewriter";




const Type = () => {
    return (
        <div>

            <h3 className="text-3xl font-semibold text-my-green">
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    deleteSpeed={25}
                    loop={0}
                    typeSpeed={75}
                    words={[
                        'Hello!!',
                        'We welcome you to',
                        'Our Simple Authentication base database related website',
                        'You can add card, update the card, and delete the card.',
                        'You can also view full details of any card if you are a logged in user',
                        " Now, Time for your journey ('_') "
                    ]}
                />
            </h3>
        </div>
    );
};

export default Type;
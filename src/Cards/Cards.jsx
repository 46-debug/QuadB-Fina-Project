import "./card.css";
import Line from "../assets/line.svg";

const Cards = () => {
    return (
        <div className="cards_main">
            <h1 id="heading_1">driven by <span id="spn_1">data.</span> fueled by <span id="spn_2">passion.</span></h1>
            <img className="line" src={Line} alt="" />
            <h1 className="heading_2">A Powerful Tech Suite</h1>
            <h5>Contact us in case you require any of the below tools</h5>

            <div className="flex flex-wrap items-center justify-center mt-10 gap-5 p-2 bg-transparent max-w-[1000px]">
                <div className="card">
                    <h4>Restaurante POS</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Suscipit rem reiciendis quis facilis distinctio iste necessitatibus saepe.
                        Accusantium dolore, tempore perferendis veritatis aspernatur recusandae,
                        doloribus, perspiciatis unde fugiat quia reprehenderit.
                    </p>
                </div>

                <div className="card_2">
                    <h4>Restaurante POS</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Suscipit rem reiciendis quis facilis distinctio iste necessitatibus saepe.
                        Accusantium dolore, tempore perferendis veritatis aspernatur recusandae,
                        doloribus, perspiciatis unde fugiat quia reprehenderit.
                    </p>
                </div>

                <div className="card">
                    <h4>Restaurante POS</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Suscipit rem reiciendis quis facilis distinctio iste necessitatibus saepe.
                        Accusantium dolore, tempore perferendis veritatis aspernatur recusandae,
                        doloribus, perspiciatis unde fugiat quia reprehenderit.
                    </p>
                </div>

                <div className="card_2">
                    <h4>Restaurante POS</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Suscipit rem reiciendis quis facilis distinctio iste necessitatibus saepe.
                        Accusantium dolore, tempore perferendis veritatis aspernatur recusandae,
                        doloribus, perspiciatis unde fugiat quia reprehenderit.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Cards;
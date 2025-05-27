import "./lineAnimation.css";
const LineAnimation = () => {
    return (
        <div className="relative">
            
            <svg width="100%" height="300vh" viewBox="-100 -100 3000 2851" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="line" d="M1639 1.5H2801V648.366L2484.5 916.341H724.5L413 1180.08V1720.69H2484.5L2801 1986.12V2649.5H0" stroke="white" stroke-width="2" />
                <circle class="circle" cx="0" cy="0" r="45.5" fill="url(#paint0_linear)" />
                <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="46" x2="91" y2="46" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F6E501" />
                        <stop offset="1" stop-color="#137400" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="text_div_1">
                <h1>We find the Creatives, so you don't have to</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, sint nihil tenetur aspernatur corporis explicabo nulla animi.
                    Minima accusantium corrupti impedit. Non placeat ut vitae magnam,
                    autem aspernatur illum. Enim.</p>
            </div>

            <div className="text_div_2">
                <h1>We find the Creatives, so you don't have to</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, sint nihil tenetur aspernatur corporis explicabo nulla animi.
                    Minima accusantium corrupti impedit. Non placeat ut vitae magnam,
                    autem aspernatur illum. Enim.</p>
            </div>

            <div className="text_div_3">
                <h1>We find the Creatives, so you don't have to</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, sint nihil tenetur aspernatur corporis explicabo nulla animi.
                    Minima accusantium corrupti impedit. Non placeat ut vitae magnam,
                    autem aspernatur illum. Enim.</p>
            </div>
        </div>

    )
}

export default LineAnimation;

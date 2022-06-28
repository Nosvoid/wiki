import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    New Fortune Wheel update is alive. [28.06.2022]
                    <br />
                    <br />
                    <h3>What can i get from the Fortune Wheel?</h3>
                    <br />

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Into the Void</th>
                                    <th scope="col"><img src="asset/shop/kov.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - All attacks are increased by 5%.<br />
                                    - All defences are increased by 5%.<br />
                                    - Your specialist's overall skill points are increased by 4.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Frost Warrior Costume Set</th>
                                    <th scope="col"><img src="asset/shop/frosty.png" alt="" /></th>
                                </tr>
                                <br />
                                Hat:
                                <br />
                                <d className="item-effect-shell">
                                    - All attacks are increased by 4%.<br />
                                    - Increases damage from critical hits by 10%.
                                </d>
                                <br />
                                <br />
                                Costume:
                                <br />
                                <d className="item-effect-shell">
                                    - All defences are increased by 4%.<br />
                                    - Dodge is increased by 50.
                                </d>
                                <br />
                                <br />
                                Costume Wings:
                                <br />
                                <d className="item-effect-shell">
                                    - Shadow element is increased by 30.<br />
                                    - Movement speed is increased by 1.<br />
                                    - There is a 1% chance of causing Shivering Frost.
                                </d>
                                <br /><br />
                                <d className="text-success">
                                    Shivering Frost<i>(4 seconds)</i>:
                                    <br />
                                    - Movement speed is decreased by 5.<br />
                                    - No attack possible.<br />
                                    <br />
                                    <br />

                                    <div className='imgSummerNPC d-flex justify-content-center'><img src="asset/shop/7.png" alt="" /></div>
                                </d>
                            </thead>
                        </table>
                    </div>
                    
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Knight Costume Set</th>
                                    <th scope="col"><img src="asset/shop/KnightCostume.png" alt="" /></th>
                                </tr>
                                <br />
                                Hat:
                                <br />
                                <d className="item-effect-shell">
                                    - All attacks are increased by 6%<br />
                                    - Hit rate of all attacks is increased by 100.<br />
                                    - Chance of inflicting critical hits is increased by 3%
                                </d>
                                <br />
                                <br />
                                Costume:
                                <br />
                                <d className="item-effect-shell">
                                    - All defences are increased by 8%.<br />
                                    - Movement Speed is increased by 1.<br />
                                    - Up to level 4 there is a 8% chance of never getting a bad effect.
                                </d>
                                <br />
                                <br />
                                Costume Wings:
                                <br />
                                <d className="item-effect-shell">
                                    - All attacks are increased by 85.<br />
                                    - Your specialist's overall skill points are increased by 3.<br />
                                    - There is a 4% chance of causing Last Hope.
                                </d>
                                <br /><br />
                                <d className="text-success">
                                    Last Hope<i>(4 seconds)</i>:
                                    <br />
                                    - Up to level 5 there is a 25% chance of never getting a bad effect.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Shadow King's Helmet</th>
                                    <th scope="col"><img src="asset/shop/shadowhelmet.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Damage in Raids is increased by 8%.<br />
                                    - All elemental resistance is increased by 7.<br />
                                    - The chance of receiving a critical hit is increased by 3%.<br />
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Shadow King's Mask</th>
                                    <th scope="col"><img src="asset/shop/shadowmask.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Damage to all monsters is increased by 7%.<br />
                                    - Damage in Raids is increased by 10%.<br />
                                    - Increases Gold earned by 7%.<br />
                                    - There is a 5% chance of causing "Amora's Heal"
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Mad March Hare Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/EasterEvent/march.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - There is 5% chance that picked up gold will be doubled.<br />
                                    - Increases Gold earned by 20%.<br />
                                    - Damage to all monsters is increased by 20%.<br />
                                    - Movement speed is increased by 1.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Raid Ring</th>
                                </tr>
                                <d className="item-effect-shell">
                                    - When raid is finished, there's a 7% chance that box drops second time.
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

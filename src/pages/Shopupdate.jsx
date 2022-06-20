import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    New Fortune Wheel update is alive. [20.06.2022]
                    <br />
                    <br />
                    <h3>What can i get from the Fortune Wheel?</h3>
                    <br />

                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Easter Bunny Costume Set</th>
                                    <th scope="col"><img src="asset/shop/BunnySet.png" alt="" /></th>
                                </tr>
                                <br />
                                Hat:
                                <br />
                                <d className="item-effect-shell">
                                    - When raid is finished, there's a 2% chance that box drops second time.<br />
                                    - Increased damage by 10% against raid bosses.
                                </d>
                                <br />
                                <br />
                                Costume:
                                <br />
                                <d className="item-effect-shell">
                                    - All defences are increased by 4%.<br />
                                    - Maximum HP is increased by 2000.
                                </d>
                                <br />
                                <br />
                                Costume Wings:
                                <br />
                                <d className="item-effect-shell">
                                    - Increases fame received by 5%.<br />
                                    - Movement speed is increased by 1.<br />
                                    - Maximum HP is increased by 2000.
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
                                        Otter Pet (New)</th>
                                    <th scope="col"><img src="asset/shop/OtterBuff.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - 10% chance of double box.<br />
                                    - Your specialist's elemental skill points are increased by 4.<br />
                                </d>
                                <br />
                                Skill "Smackeroo": <i>colldown 40 seconds</i>
                                <br />
                                <d className="item-effect-shell">
                                    - There is 100% chance of causing "Delicious Tuna"<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reduce all elemental resistance by 50.<i>20 seconds</i><br />

                                    - There is 50% chance of causing "Frozen Tuna"<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The chance of receiving a critial hit is increased by 20%.<i>15 seconds</i><br />

                                    - There is 10% chance of causing "Battle ready"<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Damage from all attacks is increased by 15%.<i>10 seconds</i>
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Mini Blue Amora Pet</th>
                                    <th scope="col"><img src="asset/shop/BlueAmoraPetBuff.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - All attacks increased by 5%.<br />
                                    - All defences are increased by 6%.<br />
                                    - Movement speed is increased by 1.<br />
                                    - There is a 5% chance of causing "Amora's Heal"
                                </d>
                                <br /><br />
                                <d className="text-success">
                                    Amora Heal buff <i>(5 seconds)</i>:<br />
                                    - HP is increased by 5% of damage given.<br />
                                    - MP is increased by 5% of damage given.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Lucy Lopear's Blessing (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/lucy.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Damage in Raids is increased by 15%.<br />
                                    - Reduces the enemy's elemental resistances by 10.<br />
                                    - The equipped fairy's element increases by 10.<br />
                                    - Movement speed is increased by 1.
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

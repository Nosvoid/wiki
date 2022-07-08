import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    New Fortune Wheel update is alive. [08.07.2022]
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
                                    <th scope="col">Easter Bunny Costume Set</th>
                                    <th scope="col"><img src="asset/EasterEvent/BunnySet.png" alt="" /></th>
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
                                    <th scope="col">Blue Amora Pet</th>

                                </tr>
                                <d className="item-effect-shell">
                                    - All defences are increased by 5%.<br />
                                    - All attacks are increased by 5%.<br />
                                    - Movement speed is increased by 1.<br />
                                    - There is a 5% chance of causing Amora Heal.<br />
                                    </d>
                                <br /><br />
                                <d className="text-success">
                                    Amora Heal<i>(5 seconds)</i>:
                                    <br />
                                    - MP is increased by 5% of damage given.<br />
                                    - HP is increased by 5% of damage given.<br />
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Betting Costume</th>
                                    <th scope="col"><img src="asset/shop/beting.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - There's 10% more of getting rarity 7-8 while betting.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Betting Necklace</th>
                                    <th scope="col"><img src="asset/shop/betingn.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - There's 7% more of getting rarity 7-8 while betting.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Lucy Lopear Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/EasterEvent/lucy.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Damage in Raids is increased by 15%.<br />
                                    - Reduces the enemy'S elemental resistances by 10.<br />
                                    - The equipped fairy's element increases by 10.<br />
                                    - Movement speed is increased by 1.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Act4 Bracelet</th>
                                </tr>
                                <d className="item-effect-shell">
                                    - When you finish Act4 and Caligor Raid you have 7% chance to get additional box.
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

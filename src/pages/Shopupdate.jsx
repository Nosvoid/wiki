import React from 'react'

export default function Shopupdate() {
    return (
        <div className='shop'>
            <div className="container">
                <div className="row series-image-list ">
                    Hello NosVoid players,
                    <br />
                    New Fortune Wheel update is alive. [24.07.2022]
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
                                    <th scope="col">Blue Amora's Blessing</th>
                                </tr>
                                <d className="item-effect-shell">
                                    - All defences are increased by 5%.<br />
                                    - All attacks are increased by 5%.<br />
                                    - Movement speed is increased by 1.<br />
                                    - There is a 3% chance of causing Amora Heal.
                                </d>
                                <br /><br />
                                <d className="text-success">
                                    Amora Heal<i>(3 seconds)</i>:
                                    <br />
                                    - MP is increased by 5% of damage given<br />
                                    - HP is increased by 3% of damage given.
                                    </d>
                            </thead>
                        </table>
                    </div>
                    
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Aegir Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/aegir.webp" alt="" /></th>

                                </tr>
                                <d className="item-effect-shell">
                                    - Meele attacks are increased by 12%.<br />
                                    - All defence powers are increased by 150.<br />
                                    - Hit rate of all attacks is increased by 80.<br />
                                    - Increases damage in Christmas Raid by 5%.

                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Easter Bunny Party Set</th>
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
                                    - Maximum HP is increased by 2000.<br />
                                    - Movement speed is increased by 1.
                                    </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Barni Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/shop/barni.webp" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Ranged attacks are increased by 12%.
                                    - Dodge is increased by 80.<br />
                                    - Increases damage from critical hits by 15%.<br />
                                    - Increases damage in Christmas Raid by 5%.
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Lucy Partner Card (S Buff)</th>
                                    <th scope="col"><img src="asset/EasterEvent/lucy.png" alt="" /></th>
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
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Koala Pet</th>
                                </tr>
                                <d className="item-effect-shell">
                                    - When raid is finished, there's a 5% chance that box drops second time.<br />
                                    - When you finish Act4 and Caligor Raid you have 10% chance to get additional box.<br />
                                    - Increases fame received by 15%.<br />
                                    - Increased gold earned by 15%.<br />
                                    - Damage in Raids is increased by 5%.
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

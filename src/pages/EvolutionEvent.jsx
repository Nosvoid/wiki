import React from 'react'
import { Player } from 'video-react';

export default function EvolutionEvent() {
    return ( 
        <div className='evolutionevent'>
            <div className="container">
                <h1 className="nosvoid-color d-flex justify-content-center">Evolution Event Guide</h1>
                <br />
                After finishing <b>Evolution Raid</b> you will get Event Box!
                <br /><br />
                <th scope="col">
                    Evolution Event box info:
                </th>
                <img src="asset/EvolutionEvent/EventBoxInfo.png" alt="" />
                <br /><br />
                <h3><b>Information about Rings</b></h3>
                <div className='col-sm-3 banner-image imgContainer'>
                    <div className="d-flex flex-row">
                        <div className="p-1"><b className="youtube-color">Red Ring</b> ______________________________________________________<Player>
                            <source src="asset/EvolutionEvent/redring.mp4" />
                        </Player></div>
                        <div className="p-1"><b className="web-dev-color">Blue Ring</b> ______________________________________________________<Player>
                            <source src="asset/EvolutionEvent/bluering.mp4" />
                        </Player></div>
                        <div className="p-1"><b className="nosvoid-color">Purple Ring</b> ______________________________________________________<Player>
                            <source src="asset/EvolutionEvent/purplering.mp4" />
                        </Player></div>
                    </div>
                </div>
                <br /><br />
                <h1 className="nosvoid-color d-flex justify-content-center">Craft Items Guide:</h1>
                <br />
                You will be able to craft the following items:
                <img src="asset/EvolutionEvent/CraftEvent.png" alt="" />
                <div className="row series-image-list ">
                    <div className='mt-5'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Raid Ring</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/RaidRing.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - When raid is finished, there's a 7% chance that box drops second time.<br />
                                    <d className="white-color">___________________________________________________________________________________________</d>
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-8'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Act4 Bracelet</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/Act4Bracelet.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - When you finish Act4 and Caligor Raid you have a 7% chance to get 2 boxes.<br />
                                    <d className="white-color">___________________________________________________________________________________________</d>
                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-8'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Betting Necklace</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/BettingNecklace.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - There is 7% more of getting rarity 7-8 while betting.<br />
                                    <d className="white-color">___________________________________________________________________________________________</d>

                                </d>
                            </thead>
                        </table>
                    </div>
                    <div className='mt-8'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        Sorcerer Tittle</th>
                                    <th scope="col"><img src="asset/EvolutionEvent/Tittle.png" alt="" /></th>
                                </tr>
                                <d className="item-effect-shell">
                                    - Reduces the enemy's elemental resistances by 7.<br />
                                    <d className="white-color">___________________________________________________________________________________________</d>
                                </d>
                            </thead>
                        </table>
                    </div>
                </div>
                <br />
                To craft this objets you will need:
                <hr />
                <div className="d-flex flex-row">
                    <div className="p-0"><b>Black Gemstone</b></div>
                    <div className="p-8"><img src="asset/EvolutionEvent/BlackGemstone.png" alt="" /></div>
                    <div className="p-1"><i>Obtained from Prestige 7 and 8 monsters</i></div>
                </div>
                <div className="d-flex flex-row">
                    <div className="p-0"><b>Diamond</b></div>
                    <div className="p-8"><img src="asset/EvolutionEvent/Diamond.png" alt="" /></div>
                    <div className="p-1"><i>Obtained from Event Box</i></div>
                </div>
                <div className="d-flex flex-row">
                    <div className="p-0"><b>Golden Fruit</b></div>
                    <div className="p-8"><img src="asset/EvolutionEvent/GoldenFruit.png" alt="" /></div>
                    <div className="p-1"><i>Obtained from Event Box and Apple Trees</i></div>
                </div>
                <br />
                In NosVille Apple Trees will be spawned each 10 minutes. You will get Golden Apple when you kill it.
                <div className="p-8"><img src="asset/EvolutionEvent/GoldenAppleTree.png" alt="" /></div>
                <br /><br />
                <h1 className="nosvoid-color d-flex justify-content-center">Pet Evolution Guide:</h1>
                <br />
                <div className="d-flex flex-row">
                    <div className="p-0">To hatch the egg and get the pet, you will need to increase the HP of the <b>Mysterious Egg</b></div>
                    <div className="p-8"><img src="asset/EvolutionEvent/MysteriousEgg.png" alt="" /></div>
                </div>
                You have two ways to do that: <br />
                1-. Wait for 10 hours to the egg breeding. <br />
                <div className="d-flex flex-row">
                    <div className="p-0">2-. You can use <b> Growth Fruit</b></div>
                    <div className="p-8"><img src="asset/EvolutionEvent/BlueFruit.png" alt="" /></div>
                    <div className="p-1"><i>Obtained from event box</i></div>
                </div>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/EvolutionEvent/growthfruit.mp4" />
                    </Player>
                </div>
                <hr />
                After your Mysterious Egg got full HP, you will get one random pet. <br />
                <div className="d-flex flex-row">
                    <div className="p-0">And you will need to use <b>Evolution Fruit</b></div>
                    <div className="p-8"><img src="asset/EvolutionEvent/GreenFruit.png" alt="" /></div>
                    <div className="p-1"><i>Obtained from event box</i></div>
                </div>
                <i className="text-danger">Every pet can be evolved max 2 times. (to get lvl 3 evolution pet)</i>
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/EvolutionEvent/evolutionfruit.mp4" />
                    </Player>
                </div>
                <hr />
                <div className="d-flex flex-row">
                    <div className="p-0">When you are done with 2 evolves, you have to use <b>Shadow Evolution Fruit</b></div>
                    <div className="p-8"><img src="asset/EvolutionEvent/ShadowFruit.png" alt="" /></div>
                    <div className="p-1"><i>Obtained from VoidMall</i></div>
                </div>
                And you will get <b>Shadow</b> version of your Pet, with stronger buffs.
                <div className='col-sm-6 banner-image imgContainer'>
                    <Player>
                        <source src="asset/EvolutionEvent/shadowfruit.mp4" />
                    </Player>
                </div>
                <br /><br />
                <h1 className="nosvoid-color d-flex justify-content-center">Pet Guide:</h1>
                <br />
                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Inferno</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    All attacks are increased by 3%.
                                    <br />
                                    All defences are increased by 3%.
                                    <br />
                                    Hit rate of attacks is increased by 75.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    All attacks are increased by 4%
                                    <br />
                                    All defences are increased by 4%
                                    <br />
                                    Hit rate of attacks is increased by 200
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Inferno.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Titan Hamster</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    Increases fame received by 10%.
                                    <br />
                                    When you finish Act4 and Caligor Raid you have 5% chance to get 2 boxes.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    Increases fame received by 15%.
                                    <br />
                                    When you finish Act4 and Caligor Raid you have 8% chance to get 2 boxes.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Hamster.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Chick Norris</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    All attacks are increased by 2%.
                                    <br />
                                    All defences are increased by 2%.
                                    <br />
                                    Increases Gold earned by 5%.
                                    <br />
                                    The equipped fairy's element increases by 3.
                                    <br />
                                    Hit rate of all attacks is increased by 50.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    All attacks are increased by 3%.
                                    <br />
                                    All defences are increased by 3%.
                                    <br />
                                    Increases Gold earned by 10%.
                                    <br />
                                    The equipped fairy's element increases by 5.
                                    <br />
                                    Hit rate of all attacks is increased by 100.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Chicken.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Seraphim</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    Increases Gold earned by 12%.
                                    <br />
                                    When raid is finished, there's a 5% chance that box drops second time.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    Increases Gold earned by 25%.
                                    <br />
                                    When raid is finished, there's a 8% chance that box drops second time.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Serafin.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Golden Fleece (Will be available soon)</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    All defences are increased by 5%.
                                    <br />
                                    Maximum HP is increased by 1000.
                                    <br />
                                    Increase crit chance in Act4 by 3%.
                                    <br />
                                    There is a 3% chance to reduce 80% damage taken in Act4.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    All defences are increased by 7%.
                                    <br />
                                    Maximum HP is increased by 1500.
                                    <br />
                                    Increase crit chance in Act4 by 5%.
                                    <br />
                                    There is a 5% chance to reduce 80% damage taken in Act4.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Fleece.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Blizzard Wolf (Will be available soon)</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    All attacks are increased by 4%.
                                    <br />
                                    Damage in Act4 is increased by 3%.
                                    <br />
                                    There is 5% chance to recover 3% max MP in act4.
                                    <br />
                                    Hit rate of all attacks is increased by 75 in act4.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    All attacks are increased by 6%.
                                    <br />
                                    Damage in Act4 is increased by 6%.
                                    <br />
                                    There is 5% chance to recover 5% max MP in act4.
                                    <br />
                                    Hit rate of all attacks is increased by 150 in act4.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Wolf.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Spooky Imp (Will be available soon)</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    Dodge is increased by 75.
                                    <br />
                                    Ranged attacks are increased by 4%.
                                    <br />
                                    Increases crit chance in Act4 by 3%.
                                    <br />
                                    Increases movement speed by 1 in Act4.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    Dodge is increased by 150.
                                    <br />
                                    Ranged attacks are increased by 6%.
                                    <br />
                                    Increases crit chance in Act4 by 5%.
                                    <br />
                                    Increases movement speed by 1 in Act4.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Imp.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Master Bunny's Blessing</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    The probability of catching a fish is increased by 5%.
                                    <br />
                                    There's a 10% chance of catching a bigger fish.
                                    <br />
                                    There's 50% chance to not consume a fish bait.
                                    <br />
                                    The fishing experience points you receive are increased by 5%.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    The probability of catching a fish is increased by 10%.
                                    <br />
                                    There's a 20% chance of catching a bigger fish.
                                    <br />
                                    There's 50% chance to not consume a fish bait.
                                    <br />
                                    The fishing experience points you receive are increased by 10%.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Bunny.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Dragon Bee's Blessing</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    Increase 5% success rate while perfecting SPs.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    Increase 10% success rate while perfecting SPs.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Bee.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <table className="table  text-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Namaju's Blessing</th>
                            <th scope="col ">Shadow Version</th>
                            <th scope="col ">In-Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr1'>
                            <td>
                                <d className="item-effect-shell">
                                    There's 4% more of getting rarity 7-8 while betting.
                                </d>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <b className="item-effect-shell">
                                    There's 7% more of getting rarity 7-8 while betting.
                                </b>
                                <br />
                                <d className="white-color">
                                    ____________________________________________
                                </d>
                            </td>
                            <td>
                                <img src="asset/EvolutionEvent/Namaju.png" alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </div >
    )
}

import annie from '../../assets/annie.jpg';
import armin from '../../assets/armin.jpg';
import bertholdt from '../../assets/bertholdt.jpg';
import conny from '../../assets/conny.jpg';
import eren from '../../assets/eren.jpg';
import erwin from '../../assets/erwin.jpg';
import falco from '../../assets/falco.jpg';
import floch from '../../assets/floch.jpg';
import gabi from '../../assets/gabi.jpg';
import grisha from '../../assets/grisha.jpg';
import hange from '../../assets/hange.jpg';
import hannes from '../../assets/hannes.jpg';
import historia from '../../assets/historia.jpg';
import jean from '../../assets/jean.jpg';
import keith from '../../assets/keith.jpg';
import kenny from '../../assets/kenny.jpg';
import levi from '../../assets/levi.jpg';
import mikasa from '../../assets/mikasa.jpg';
import onyankopon from '../../assets/onyankopon.jpg';
import pieck from '../../assets/pieck.jpg';
import reiner from '../../assets/reiner.jpg';
import sasha from '../../assets/sasha.jpg';
import yelena from '../../assets/yelena.jpg';
import ymir from '../../assets/ymir.jpg';
import zeke from '../../assets/zeke.jpg';


export const photoArray = [
  {photo: annie, name: 'Annie'},
  {photo:armin, name: 'Armin'},
  {photo:bertholdt, name: 'Bertholdt'},
  {photo:conny, name: 'Conny'},
  {photo:eren, name: 'Eren'},
  {photo:erwin, name: 'Erwin'},
  {photo:falco, name: 'Falco'},
  {photo:floch, name: 'Floch'},
  {photo:gabi, name: 'Gabi'},
  {photo:grisha, name: 'Grisha'},
  {photo:hange, name: 'Hange'},
  {photo:hannes, name: 'Hannes'},
  {photo:historia, name: 'Historia'},
  {photo:jean, name: 'Jean'},
  {photo:keith, name: 'Keith'},
  {photo:kenny, name: 'Kenny'},
  {photo:levi, name: 'Levi'},
  {photo:mikasa, name: 'Mikasa'},
  {photo:onyankopon, name: 'Onyankopon'},
  {photo:pieck, name: 'Pieck'},
  {photo:reiner, name: 'Reiner'},
  {photo:sasha, name: 'Sasha'},
  {photo:yelena, name: 'Yelena'},
  {photo:ymir, name: 'Ymir'},
  {photo:zeke, name: 'Zeke'},
]

export function getRandomItems(array, num) {
  const shuffled = array.sort(()=> 0.5 - Math.random());
  return shuffled.slice(0, num);
}
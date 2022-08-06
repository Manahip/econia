import * as $ from "@manahippo/move-to-ts";
import {AptosDataCache, AptosParserRepo, DummyCache} from "@manahippo/move-to-ts";
import {U8, U64, U128} from "@manahippo/move-to-ts";
import {u8, u64, u128} from "@manahippo/move-to-ts";
import {TypeParamDeclType, FieldDeclType} from "@manahippo/move-to-ts";
import {AtomicTypeTag, StructTag, TypeTag, VectorTag} from "@manahippo/move-to-ts";
import {HexString, AptosClient} from "aptos";
import * as Std from "../std";
export const packageName = "Econia";
export const moduleAddress = new HexString("0xc0deb00c9154b6b64db01eeb77d08255300315e1fa35b687d384a703f6034fbd");
export const moduleName = "capability";

export const E_NOT_ECONIA : U64 = u64("0");


export class EconiaCapability 
{
  static moduleAddress = moduleAddress;
  static moduleName = moduleName;
  static structName: string = "EconiaCapability";
  static typeParameters: TypeParamDeclType[] = [

  ];
  static fields: FieldDeclType[] = [
  ];

  constructor(proto: any, public typeTag: TypeTag) {

  }

  static EconiaCapabilityParser(data:any, typeTag: TypeTag, repo: AptosParserRepo) : EconiaCapability {
    const proto = $.parseStructProto(data, typeTag, repo, EconiaCapability);
    return new EconiaCapability(proto, typeTag);
  }

}
export function get_econia_capability_ (
  account: HexString,
  $c: AptosDataCache,
): EconiaCapability {
  if (!((Std.Signer.address_of_(account, $c)).hex() === (new HexString("0xc0deb00c9154b6b64db01eeb77d08255300315e1fa35b687d384a703f6034fbd")).hex())) {
    throw $.abortCode(E_NOT_ECONIA);
  }
  return new EconiaCapability({  }, new StructTag(new HexString("0xc0deb00c9154b6b64db01eeb77d08255300315e1fa35b687d384a703f6034fbd"), "capability", "EconiaCapability", []));
}

export function loadParsers(repo: AptosParserRepo) {
  repo.addParser("0xc0deb00c9154b6b64db01eeb77d08255300315e1fa35b687d384a703f6034fbd::capability::EconiaCapability", EconiaCapability.EconiaCapabilityParser);
}


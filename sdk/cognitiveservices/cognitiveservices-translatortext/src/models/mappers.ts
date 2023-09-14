/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as msRest from "@azure/ms-rest-js";


export const LanguagesResultTranslationLanguageCode: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_translation_languageCode",
  type: {
    name: "Composite",
    className: "LanguagesResultTranslationLanguageCode",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nativeName: {
        serializedName: "nativeName",
        type: {
          name: "String"
        }
      },
      dir: {
        serializedName: "dir",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LanguagesResultTranslation: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_translation",
  type: {
    name: "Composite",
    className: "LanguagesResultTranslation",
    modelProperties: {
      languageCode: {
        serializedName: "languageCode",
        type: {
          name: "Composite",
          className: "LanguagesResultTranslationLanguageCode"
        }
      }
    }
  }
};

export const LanguagesResultTransliterationLanguageCodeScriptsItemToScriptsItem: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_transliteration_languageCode_scriptsItem_toScriptsItem",
  type: {
    name: "Composite",
    className: "LanguagesResultTransliterationLanguageCodeScriptsItemToScriptsItem",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nativeName: {
        serializedName: "nativeName",
        type: {
          name: "String"
        }
      },
      dir: {
        serializedName: "dir",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LanguagesResultTransliterationLanguageCodeScriptsItem: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_transliteration_languageCode_scriptsItem",
  type: {
    name: "Composite",
    className: "LanguagesResultTransliterationLanguageCodeScriptsItem",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nativeName: {
        serializedName: "nativeName",
        type: {
          name: "String"
        }
      },
      dir: {
        serializedName: "dir",
        type: {
          name: "String"
        }
      },
      toScripts: {
        serializedName: "toScripts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguagesResultTransliterationLanguageCodeScriptsItemToScriptsItem"
            }
          }
        }
      }
    }
  }
};

export const LanguagesResultTransliterationLanguageCode: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_transliteration_languageCode",
  type: {
    name: "Composite",
    className: "LanguagesResultTransliterationLanguageCode",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nativeName: {
        serializedName: "nativeName",
        type: {
          name: "String"
        }
      },
      scripts: {
        serializedName: "scripts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguagesResultTransliterationLanguageCodeScriptsItem"
            }
          }
        }
      }
    }
  }
};

export const LanguagesResultTransliteration: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_transliteration",
  type: {
    name: "Composite",
    className: "LanguagesResultTransliteration",
    modelProperties: {
      languageCode: {
        serializedName: "languageCode",
        type: {
          name: "Composite",
          className: "LanguagesResultTransliterationLanguageCode"
        }
      }
    }
  }
};

export const LanguagesResultDictionaryLanguageCodeTranslationsItem: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_dictionary_languageCode_translationsItem",
  type: {
    name: "Composite",
    className: "LanguagesResultDictionaryLanguageCodeTranslationsItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nativeName: {
        serializedName: "nativeName",
        type: {
          name: "String"
        }
      },
      dir: {
        serializedName: "dir",
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LanguagesResultDictionaryLanguageCode: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_dictionary_languageCode",
  type: {
    name: "Composite",
    className: "LanguagesResultDictionaryLanguageCode",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      nativeName: {
        serializedName: "nativeName",
        type: {
          name: "String"
        }
      },
      dir: {
        serializedName: "dir",
        type: {
          name: "String"
        }
      },
      translations: {
        serializedName: "translations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LanguagesResultDictionaryLanguageCodeTranslationsItem"
            }
          }
        }
      }
    }
  }
};

export const LanguagesResultDictionary: msRest.CompositeMapper = {
  serializedName: "LanguagesResult_dictionary",
  type: {
    name: "Composite",
    className: "LanguagesResultDictionary",
    modelProperties: {
      languageCode: {
        serializedName: "languageCode",
        type: {
          name: "Composite",
          className: "LanguagesResultDictionaryLanguageCode"
        }
      }
    }
  }
};

export const LanguagesResult: msRest.CompositeMapper = {
  serializedName: "LanguagesResult",
  type: {
    name: "Composite",
    className: "LanguagesResult",
    modelProperties: {
      translation: {
        serializedName: "translation",
        type: {
          name: "Composite",
          className: "LanguagesResultTranslation"
        }
      },
      transliteration: {
        serializedName: "transliteration",
        type: {
          name: "Composite",
          className: "LanguagesResultTransliteration"
        }
      },
      dictionary: {
        serializedName: "dictionary",
        type: {
          name: "Composite",
          className: "LanguagesResultDictionary"
        }
      }
    }
  }
};

export const DictionaryExampleResultItemExamplesItem: msRest.CompositeMapper = {
  serializedName: "DictionaryExampleResultItem_examplesItem",
  type: {
    name: "Composite",
    className: "DictionaryExampleResultItemExamplesItem",
    modelProperties: {
      sourcePrefix: {
        serializedName: "sourcePrefix",
        type: {
          name: "String"
        }
      },
      sourceTerm: {
        serializedName: "sourceTerm",
        type: {
          name: "String"
        }
      },
      sourceSuffix: {
        serializedName: "sourceSuffix",
        type: {
          name: "String"
        }
      },
      targetPrefix: {
        serializedName: "targetPrefix",
        type: {
          name: "String"
        }
      },
      targetTerm: {
        serializedName: "targetTerm",
        type: {
          name: "String"
        }
      },
      targetSuffix: {
        serializedName: "targetSuffix",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DictionaryExampleResultItem: msRest.CompositeMapper = {
  serializedName: "DictionaryExampleResultItem",
  type: {
    name: "Composite",
    className: "DictionaryExampleResultItem",
    modelProperties: {
      normalizedSource: {
        serializedName: "normalizedSource",
        type: {
          name: "String"
        }
      },
      normalizedTarget: {
        serializedName: "normalizedTarget",
        type: {
          name: "String"
        }
      },
      examples: {
        serializedName: "examples",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DictionaryExampleResultItemExamplesItem"
            }
          }
        }
      }
    }
  }
};

export const DictionaryLookupResultItemTranslationsItemBackTranslationsItem: msRest.CompositeMapper = {
  serializedName: "DictionaryLookupResultItem_translationsItem_backTranslationsItem",
  type: {
    name: "Composite",
    className: "DictionaryLookupResultItemTranslationsItemBackTranslationsItem",
    modelProperties: {
      normalizedText: {
        serializedName: "normalizedText",
        type: {
          name: "String"
        }
      },
      displayText: {
        serializedName: "displayText",
        type: {
          name: "String"
        }
      },
      numExamples: {
        serializedName: "numExamples",
        type: {
          name: "Number"
        }
      },
      frequencyCount: {
        serializedName: "frequencyCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DictionaryLookupResultItemTranslationsItem: msRest.CompositeMapper = {
  serializedName: "DictionaryLookupResultItem_translationsItem",
  type: {
    name: "Composite",
    className: "DictionaryLookupResultItemTranslationsItem",
    modelProperties: {
      normalizedTarget: {
        serializedName: "normalizedTarget",
        type: {
          name: "String"
        }
      },
      displayTarget: {
        serializedName: "displayTarget",
        type: {
          name: "String"
        }
      },
      posTag: {
        serializedName: "posTag",
        type: {
          name: "String"
        }
      },
      confidence: {
        serializedName: "confidence",
        type: {
          name: "Number"
        }
      },
      prefixWord: {
        serializedName: "prefixWord",
        type: {
          name: "String"
        }
      },
      backTranslations: {
        serializedName: "backTranslations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DictionaryLookupResultItemTranslationsItemBackTranslationsItem"
            }
          }
        }
      }
    }
  }
};

export const DictionaryLookupResultItem: msRest.CompositeMapper = {
  serializedName: "DictionaryLookupResultItem",
  type: {
    name: "Composite",
    className: "DictionaryLookupResultItem",
    modelProperties: {
      normalizedSource: {
        serializedName: "normalizedSource",
        type: {
          name: "String"
        }
      },
      displaySource: {
        serializedName: "displaySource",
        type: {
          name: "String"
        }
      },
      translations: {
        serializedName: "translations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DictionaryLookupResultItemTranslationsItem"
            }
          }
        }
      }
    }
  }
};

export const TranslateResultItemTranslationItem: msRest.CompositeMapper = {
  serializedName: "TranslateResultItem_translationItem",
  type: {
    name: "Composite",
    className: "TranslateResultItemTranslationItem",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      to: {
        serializedName: "to",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TranslateResultItem: msRest.CompositeMapper = {
  serializedName: "TranslateResultItem",
  type: {
    name: "Composite",
    className: "TranslateResultItem",
    modelProperties: {
      translation: {
        serializedName: "translation",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TranslateResultItemTranslationItem"
            }
          }
        }
      }
    }
  }
};

export const TranslateResultAllItemDetectedLanguage: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem_detectedLanguage",
  type: {
    name: "Composite",
    className: "TranslateResultAllItemDetectedLanguage",
    modelProperties: {
      language: {
        serializedName: "language",
        type: {
          name: "String"
        }
      },
      score: {
        serializedName: "score",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TranslateResultAllItemTranslationsItemTransliteration: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem_translationsItem_transliteration",
  type: {
    name: "Composite",
    className: "TranslateResultAllItemTranslationsItemTransliteration",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      script: {
        serializedName: "script",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TranslateResultAllItemTranslationsItemAlignment: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem_translationsItem_alignment",
  type: {
    name: "Composite",
    className: "TranslateResultAllItemTranslationsItemAlignment",
    modelProperties: {
      proj: {
        serializedName: "proj",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TranslateResultAllItemTranslationsItemSentLenSrcSentLenItem: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem_translationsItem_sentLen_srcSentLenItem",
  type: {
    name: "Composite",
    className: "TranslateResultAllItemTranslationsItemSentLenSrcSentLenItem",
    modelProperties: {
      integer: {
        serializedName: "integer",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TranslateResultAllItemTranslationsItemSentLenTransSentLenItem: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem_translationsItem_sentLen_transSentLenItem",
  type: {
    name: "Composite",
    className: "TranslateResultAllItemTranslationsItemSentLenTransSentLenItem",
    modelProperties: {
      integer: {
        serializedName: "integer",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const TranslateResultAllItemTranslationsItemSentLen: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem_translationsItem_sentLen",
  type: {
    name: "Composite",
    className: "TranslateResultAllItemTranslationsItemSentLen",
    modelProperties: {
      srcSentLen: {
        serializedName: "srcSentLen",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TranslateResultAllItemTranslationsItemSentLenSrcSentLenItem"
            }
          }
        }
      },
      transSentLen: {
        serializedName: "transSentLen",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TranslateResultAllItemTranslationsItemSentLenTransSentLenItem"
            }
          }
        }
      }
    }
  }
};

export const TranslateResultAllItemTranslationsItem: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem_translationsItem",
  type: {
    name: "Composite",
    className: "TranslateResultAllItemTranslationsItem",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      transliteration: {
        serializedName: "transliteration",
        type: {
          name: "Composite",
          className: "TranslateResultAllItemTranslationsItemTransliteration"
        }
      },
      to: {
        serializedName: "to",
        type: {
          name: "String"
        }
      },
      alignment: {
        serializedName: "alignment",
        type: {
          name: "Composite",
          className: "TranslateResultAllItemTranslationsItemAlignment"
        }
      },
      sentLen: {
        serializedName: "sentLen",
        type: {
          name: "Composite",
          className: "TranslateResultAllItemTranslationsItemSentLen"
        }
      }
    }
  }
};

export const TranslateResultAllItem: msRest.CompositeMapper = {
  serializedName: "TranslateResultAllItem",
  type: {
    name: "Composite",
    className: "TranslateResultAllItem",
    modelProperties: {
      detectedLanguage: {
        serializedName: "detectedLanguage",
        type: {
          name: "Composite",
          className: "TranslateResultAllItemDetectedLanguage"
        }
      },
      translations: {
        serializedName: "translations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TranslateResultAllItemTranslationsItem"
            }
          }
        }
      }
    }
  }
};

export const BreakSentenceResultItem: msRest.CompositeMapper = {
  serializedName: "BreakSentenceResultItem",
  type: {
    name: "Composite",
    className: "BreakSentenceResultItem",
    modelProperties: {
      sentLen: {
        serializedName: "sentLen",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      }
    }
  }
};

export const TransliterateResultItem: msRest.CompositeMapper = {
  serializedName: "TransliterateResultItem",
  type: {
    name: "Composite",
    className: "TransliterateResultItem",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      script: {
        serializedName: "script",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DetectResultItem: msRest.CompositeMapper = {
  serializedName: "DetectResultItem",
  type: {
    name: "Composite",
    className: "DetectResultItem",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BreakSentenceTextInput: msRest.CompositeMapper = {
  serializedName: "BreakSentenceTextInput",
  type: {
    name: "Composite",
    className: "BreakSentenceTextInput",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorMessageError: msRest.CompositeMapper = {
  serializedName: "ErrorMessage_error",
  type: {
    name: "Composite",
    className: "ErrorMessageError",
    modelProperties: {
      code: {
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorMessage: msRest.CompositeMapper = {
  serializedName: "ErrorMessage",
  type: {
    name: "Composite",
    className: "ErrorMessage",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorMessageError"
        }
      }
    }
  }
};

export const DetectTextInput: msRest.CompositeMapper = {
  serializedName: "DetectTextInput",
  type: {
    name: "Composite",
    className: "DetectTextInput",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DictionaryLookupTextInput: msRest.CompositeMapper = {
  serializedName: "DictionaryLookupTextInput",
  type: {
    name: "Composite",
    className: "DictionaryLookupTextInput",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DictionaryExampleTextInput: msRest.CompositeMapper = {
  serializedName: "DictionaryExampleTextInput",
  type: {
    name: "Composite",
    className: "DictionaryExampleTextInput",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      },
      translation: {
        serializedName: "translation",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TranslateTextInput: msRest.CompositeMapper = {
  serializedName: "TranslateTextInput",
  type: {
    name: "Composite",
    className: "TranslateTextInput",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TransliterateTextInput: msRest.CompositeMapper = {
  serializedName: "TransliterateTextInput",
  type: {
    name: "Composite",
    className: "TransliterateTextInput",
    modelProperties: {
      text: {
        serializedName: "text",
        type: {
          name: "String"
        }
      }
    }
  }
};

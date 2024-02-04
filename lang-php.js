
/**
 * @license
 * Copyright (C) 2009 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * 
 * PHP language handler for Google Code Prettify
 *
 * @author monicfenga (https://github.com/monicfenga) and Bito AI (https://bito.ai/) 2024
 */

    
/**
 * @license
 * Copyright (C) 2009 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * 
 * PHP language handler for Google Code Prettify
 *
 * @author monicfenga (https://github.com/monicfenga) and Bito AI (https://bito.ai/) 2024
 */

PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            // PHP-specific Beginning
            ['opn', /^\<\?php/, null, '<?'],
            // PHP-specific End
            ['clo', /^\?\>/, null, '?>'],
            // PHP-specific variables
            ['var', /^(?:\$[A-Za-z0-9_]\w*)/i, null, '$'],
            // Whitespace
            [PR['PR_PLAIN'],       /^[ \t\n\r]+/, null, ' \t\n\r'],
            // A double or single quoted, possibly multi-line, string.
            [PR['PR_STRING'],      /^(?:\"(?:[^\"\\\n\r]|\\.)*(?:\"|$)|\'(?:[^\'\\\n\r]|\\.)*(?:\'|$))/, null, '"\''],
            // A here-doc string.
            [PR['PR_STRING'],      /^(?:<<<\w+)(?:[\w\d_]+\r?\n|[\w\d_]+\r\n)((?:.|\r?\n)*?)(?:\r?\n\1)/, null, '"""'],
            // A comment is either a line comment that starts with two dashes, or
            // two dashes preceding a long bracketed block.
            [PR['PR_COMMENT'],     /^(?:\/\/.*|\/\*[\s\S]*?\*\/)/, null,'/*'],
            // A long bracketed block not preceded by -- is a string.
            [PR['PR_STRING'],      /^\[(=*)\[[\s\S]*?(?:\]\1\]|$)/],
            // A number is a hex integer literal, a decimal real literal, or in
            // scientific notation.
            [PR['PR_LITERAL'], /^[+-]?(?:0x[\da-f]+|(?:(?:\.\d+|\d+(?:\.\d*)?)(?:e[+\-]?\d+)?))/i,null,'0123456789'],
            // An identifier
            [PR['PR_PLAIN'], /^[a-z_]\w*/i],
            // A run of punctuation
            [PR['PR_PUNCTUATION'], /^[^\w\t\n\r \xA0][^\w\t\n\r \xA0\"\'\-\+=]*/]
        ],
        [

            // Keywords
            [PR['PR_KEYWORD'], /^(?:and|break|case|catch|class|clone|const|continue|declare|default|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|final|for|foreach|function|global|goto|if|implements|interface|instanceof|namespace|new|or|private|protected|public|static|switch|throw|try|use|var|while|xor)\b/, null],
            // PHP-specific keywords
            [PR['PR_KEYWORD'], /^(?:__halt_compiler|abstract|array|as|bool|boolean|callable|cfunction|const|double|echo|empty|exit|float|include|include_once|int|integer|isset|list|null|object|parent|print|require|require_once|resource|return|self|string|unset)\b/, null],
            // PHP-specific constants
            [PR['PR_LITERAL'], /^(?:true|false|null)\b/, null],
            // PHP-specific built-in functions
            [PR['PR_BUILTIN'], /^(?:__CLASS__|__FILE__|__FUNCTION__|__LINE__|__METHOD__|__NAMESPACE__|__DIR__|__TRAIT__)\b/, null]

        ]
    ),
    ['php']
);
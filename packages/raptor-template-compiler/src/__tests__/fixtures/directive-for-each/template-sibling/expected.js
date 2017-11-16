export default function tmpl($api, $cmp, $slotset, $ctx) {
    const {
        t: api_text,
        d: api_dynamic,
        h: api_element,
        i: api_iterator,
        f: api_flatten
    } = $api;

    return [
        api_element(
            'section',
            {},
            api_flatten([
                api_iterator($cmp.items, function(item) {
                    return [
                        api_element('p', {}, [
                            api_text('1'),
                            api_dynamic(item)
                        ]),
                        api_element('p', {}, [api_text('2'), api_dynamic(item)])
                    ];
                }),
                api_element('p', {}, [api_text('3'), api_dynamic($cmp.item)])
            ])
        )
    ];
}
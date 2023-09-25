import Image from 'next/image'

function Samples() {
    return (
        <section className="sample-section">
            <h1>Примерни продукти</h1>
            <article>
                <h3>Стойка за PS5 джойстици</h3>
                <Image
                    src='/images/stoika.jpg'
                    alt='Prop image'
                    width={300}
                    height={300}
                />
            </article>
            <article>
                <h3>Косплей нож</h3>
                <Image
                    src='/images/noj.jpg'
                    alt='Prop image'
                    width={300}
                    height={300}
                />
            </article>
        </section>
    )
}

export default Samples
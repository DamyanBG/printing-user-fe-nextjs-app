function Quoting() {
    return (
        <section className="quoting">
            <h1>Изпратете ни запитване!</h1>
            <form action="">
                <article>
                    <label htmlFor="">Имена: </label>
                    <input type="text" />
                </article>
                <article>
                    <label htmlFor="">И-мейл: </label>
                    <input type="text" />
                </article>
                <article>
                    <label htmlFor="">Материал: </label>
                    <select name="" id="">
                        <option value="">Изберете материал</option>
                        <option value="pla">PLA</option>
                        <option value="abs">ABS</option>
                        <option value="petg">PETG</option>
                        <option value="pla-cf">Карбон</option>
                        <option value="tpu">TPU</option>
                    </select>
                </article>
                <article>
                    <label htmlFor="">Файл: </label>
                    <input type="file" />
                </article>
                <button type="submit">Изпрати</button>
            </form>
        </section>
    )
}

export default Quoting;
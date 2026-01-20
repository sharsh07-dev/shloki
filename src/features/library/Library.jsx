import BookCard from '../../components/ui/BookCard';
import { BOOKS } from '../../lib/data';

export default function Library() {
  return (
    <div className="pt-24 px-4 pb-20 max-w-md mx-auto min-h-screen">
      <div className="mb-8">
        <span className="px-3 py-1 rounded-full border border-saffron/30 text-saffron text-xs font-bold uppercase tracking-widest bg-saffron/5">
          Learn Sacred Wisdom
        </span>
        <h1 className="font-serif text-4xl mt-4 mb-2 text-parchment">
          One Shloka <br />
          <span className="text-saffron">At a Time.</span>
        </h1>
        <p className="text-parchment-dim">Select a scripture to begin your journey.</p>
      </div>

      <div className="space-y-4">
        {BOOKS.map(book => (
          <BookCard key={book.id} book={book} progress={0} />
        ))}
      </div>
    </div>
  );
}
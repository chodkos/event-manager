package pl.training.backend.model;

import org.springframework.data.jpa.repository.JpaRepository;


/**
 * Created by Raynor on 2017-07-26.
 */
public interface MeetingRepository extends JpaRepository<Meeting, Long> {

}

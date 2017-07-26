package pl.training.backend.model;

import io.swagger.annotations.ApiModel;
import lombok.Data;
import pl.training.backend.security.dto.UserDto;

import java.util.List;

/**
 * Created by Raynor on 2017-07-26.
 */
@ApiModel(value = "Meetings")
@Data
public class MeetingPageDto {

    private List<MeetingDto> meetings;
    private int pageNumber;
    private int totalPages;

    public MeetingPageDto() {
    }

    public MeetingPageDto(List<MeetingDto> meetings, int pageNumber, int totalPages) {
        this.meetings = meetings;
        this.pageNumber = pageNumber;
        this.totalPages = totalPages;
    }
}
